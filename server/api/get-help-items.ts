// import { $axios } from '~/axios'
//const data = () => import('./mock')
import data from './get-help-items.json'
// export default async function (payload) {
//     if(true) {
//         // const content = await data()
//         // console.log(content.default)
//         console.log(data)
//         return {data}
//     } else {
//         return await $axios.$get(`api/help/items/?${payload}`)
//     }
// }
export default defineEventHandler(() => {
    return {data}
})