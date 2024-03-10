<template>
  <div class="app-single-news">
    <PMainBanner :type="'news'" :api="false" :item="dItem"/>
    <PNewsContent :list="dItem.content"/>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const { id } = useRoute().params

const { data: item } = await useFetch(`/api/single-news/`, {
  transform: (item) => {
    return item.data.find(elem => Number(elem.id) === Number(id))
  }
})
let dItem = ref({})
dItem = item.value
</script>
<style scoped lang="scss">

</style>