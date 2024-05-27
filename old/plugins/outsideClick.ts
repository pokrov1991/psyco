export default defineNuxtPlugin( (nuxtApp)=>{
    nuxtApp.vueApp.directive('outside-click', {
        mounted (el,binding, vnode) {
            el.clickOutsideEvent = function (event) {
                // here I check that click was outside the el and his children
                if (!(el === event.target || el.contains(event.target))) {
                    // and if it did, call method provided in attribute value
                    vnode.dirs[0].value(event)
                }
            }
            document.body.addEventListener('click', el.clickOutsideEvent)
        },
        unmounted(el){
            document.body.removeEventListener('click', el.clickOutsideEvent)
        }
    })
})