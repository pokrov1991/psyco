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
          <p-slider-help-item :item="slide"/>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const {data: items} = await useFetch('/api/get-help-items')
const helpItems = ref(items.value.data)
</script>
<style scoped lang="scss">

</style>