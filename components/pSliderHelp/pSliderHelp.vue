<template>
<div class="p-slider-help">
  <div class="p-slider-help__container">
    <div class="p-slider-help__wrapper">
      <div class="p-slider-help__title">
        <h3>Помощь</h3> <span>/ в решении вопросов</span>
      </div>
      <Swiper
          :class="'p-slider-help__slider'"
          :slides-per-view="4.5"
          :space-between="8"
      >
        <SwiperSlide v-for="slide in helpItems" :key="slide.id">
          <p-help-item :item="slide" @open-modal="openModal"/>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  <p-modal-form />
</div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import PHelpItem from "~/components/pSliderHelp/pHelpItem.vue";
const {data: items} = await useFetch('/api/get-help-items')
const helpItems = ref(items.value.data)
const emit = defineEmits(["open-modal"]);
const openModal = (item) => {
  emit('open-modal', item)
}
</script>
<style scoped lang="scss">

</style>