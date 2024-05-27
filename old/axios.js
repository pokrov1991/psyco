// eslint-disable-next-line import/no-mutable-exports
export let $axios

export default ({ app, $axios: axios, req, store }) => {
  $axios = axios

  // Add header Accept-Language
  $axios.setHeader('Accept-Language', app.i18n.locale)
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    $axios.setHeader('Accept-Language', newLocale)
  }

  if (process.client) {
    // Custom headers client
    const regexHttp = /https?:\/\//gi
    $axios.setHeader(
      'X-Forwarded-User-Host',
      app.i18n.__baseUrl.replace(regexHttp, '')
    )

    $axios.onError((error) => {
      if (
        error.response?.status === 401 &&
        app.router.app._route.params.method !== 'emailchange'
      ) {
        app.$auth.reset()
      }
    })
  }

  if (process.server) {
    const interceptorRequest = $axios.interceptors.request.use(function (
      config
    ) {
      let cookie = {}
      try {
        cookie = {
          ...app.$cookie.getAll(),
          ...app.$cookie.getAll({ fromRes: true }),
        }
      } catch {
        cookie = app.$cookie.getAll()
      }

      if (
        cookie &&
        cookie.geo_marker &&
        cookie.geo_marker === 'NL' &&
        process.env.AXIOS_URL_ALT
      ) {
        $axios.setBaseURL(process.env.AXIOS_URL_ALT)
      } else {
        $axios.setBaseURL(process.env.AXIOS_URL)
      }

      // Passing client headers
      const headersClient =
        req && req.headers ? Object.assign({}, req.headers) : {}
      config.headers = { ...config.headers, ...headersClient }
      config.headers.common = { ...config.headers.common, ...headersClient }

      // Custom headers server
      const headersHost = req && req.headers ? req.headers.host : 'none'
      $axios.setHeader('X-Forwarded-User-Host', headersHost)

      // clear memory
      $axios.interceptors.request.eject(interceptorRequest)

      return config
    })

    // Add a response interceptor
    const interceptorRequestResponse = $axios.interceptors.response.use(
      function (response) {
        // Add headers to ip country user store geoSdk
        const headers = response.config.headers

        if (headers['cf-ipcountry']) {
          store.commit('geoSdk/setGeo', {
            userCountry: headers['cf-ipcountry'],
            userIp: headers['cf-connecting-ip'],
          })
        }

        // clear memory
        $axios.interceptors.response.eject(interceptorRequestResponse)

        return response
      }
    )
  }
}
