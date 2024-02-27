import form from '../mock/get-main-banner-form.json'
import welcome from '../mock/get-main-banner-welcome.json'
import services from '../mock/get-main-banner-services.json'
let data ={}
export default defineEventHandler((elem, query) => {
    if(elem['_path']?.includes('form')) {
        data = form
        return {data}
    } else if(elem['_path']?.includes('services')) {
        data = services
        return {data}
    } else if(elem['_path']?.includes('welcome')) {
        data = welcome
        return {data}
    }

})
