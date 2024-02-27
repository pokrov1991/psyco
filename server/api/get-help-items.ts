import data from '../mock/get-help-items.json'

export default defineEventHandler((elem,params) => {
    return {data}
})