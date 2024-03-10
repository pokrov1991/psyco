<template>
<div class="p-slider-help">
  <div class="p-slider-help__container">
    <div class="p-slider-help__wrapper">
      <div class="p-slider-help__title">
        <h3>Помощь</h3> <span>/ в решении вопросов</span>
      </div>
      <Swiper
          :class="'p-slider-help__slider'"
          :slides-per-view="'auto'"
          :space-between="8"
      >
        <SwiperSlide v-for="slide in helpItems" :key="slide.id">
          <p-help-item @open-form="openForm" :item="slide" @open-modal="openModal"/>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import {ref,defineEmits} from 'vue'
import PHelpItem from "~/components/pSliderHelp/pHelpItem.vue";
const {data: items} = await useFetch('/api/get-help-items')
const helpItems = ref(items.value.data)
const emit = defineEmits(["open-modal"]);
const openModal = (item) => {
  emit('open-modal', item)
}
const openForm = () => {
  emit('open-form')
}
</script>
<style scoped lang="scss">

</style>