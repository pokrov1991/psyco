<template>
  <div class="p-main-banner" :class="'p-main-banner__' + dItem.type">
    <img :src="dItem.src" :class="'p-main-banner__img'" alt="">
    <div class="p-main-banner__container">
      <p-main-banner-welcome :item="dItem" v-if="dItem.type === 'welcome' && api"/>
      <p-main-banner-services :item="dItem" v-if="dItem.type === 'services' || dItem.type === 'about' && api"/>
      <p-main-banner-form @open-form="openForm" :item="dItem" v-if="dItem.type === 'form' && api"/>
      <p-main-banner-contacts :item="dItem" v-if="dItem.type === 'contacts' && api" />
      <p-main-banner-news :item="dItem" v-if="props.type = 'news' && !api"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,defineEmits,defineProps,withDefaults} from 'vue'
interface Props {
  type: string,
  api?: boolean,
  item?: object,
}
const emit = defineEmits('open-form')
const props = withDefaults( defineProps<Props>(), {
  type: 'welcome',
  api: true,
});
const dItem = ref({})
const {data: item} = await useFetch('/api/get-main-banner', {
  query: {
    type: props.type
  }
})
if(props.api) {
  dItem.value = item.value.data
} else {
  dItem.value = props.item
}
const openForm = () => {
  emit('open-form')
}
</script>

<style>
@import "pMainBanner.scss";
</style>