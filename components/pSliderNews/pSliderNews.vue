<template>
<div class="p-slider-news">
  <div class="p-slider-news__container">
    <div class="p-slider-news__wrapper">
      <div class="p-slider-news__title">
        <h3>Последние статьи и новости</h3>
      </div>
      <Swiper
          :class="'p-slider-news__slider'"
          :slides-per-view="'auto'"
          :space-between="8"
      >
        <SwiperSlide v-for="(slide,index) in news" :key="index">
          <p-slider-news-item :item="slide"/>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import {ref} from 'vue';

const {data: items} = await useFetch('/api/get-news-slider')
const news = ref(items.value.data)
</script>
<style scoped lang="scss">

</style>