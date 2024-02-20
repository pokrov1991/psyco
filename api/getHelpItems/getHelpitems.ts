import { $axios } from '@/axios'
const data = () => import('./mock')

export default async function (payload) {
    if(true) {
        const content = await data()
        // console.log(content.default)
        return content.default
    } else {
        return await $axios.$get(`api/help/items/?${payload}`)
    }
}