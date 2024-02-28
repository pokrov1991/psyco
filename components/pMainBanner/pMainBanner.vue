<template>
  <div class="p-main-banner" :class="'p-main-banner__' + dItem.type">
    <img :src="dItem.src" :class="'p-main-banner__img'" alt="">
    <div class="p-main-banner__container">
      <p-main-banner-welcome :item="dItem" v-if="dItem.type === 'welcome'"/>
      <p-main-banner-services :item="dItem" v-if="dItem.type === 'services' || dItem.type === 'about' "/>
      <p-main-banner-form :item="dItem" v-if="dItem.type === 'form'"/>
      <p-main-banner-contacts :item="dItem" v-if="dItem.type === 'contacts'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
interface Props {
  type: string,
}
const props = withDefaults( defineProps<Props>(), {
  type: 'welcome',
});
const dItem = ref({})
const {data: item} = await useFetch('/api/get-main-banner', {
  query: {
    type: props.type
  }
})
dItem.value = item.value.data
</script>

<style>
@import "pMainBanner.scss";
</style>