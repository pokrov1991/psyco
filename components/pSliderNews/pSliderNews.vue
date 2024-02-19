<template>
<div class="p-slider-news">
  <div class="p-slider-news__container">
    <div class="p-slider-news__wrapper">
      <div class="p-slider-news__title">
        <h3>Последние статьи и новости</h3>
      </div>
      <Swiper
          :class="'p-slider-news__slider'"
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :slides-per-view="4.5"
          :space-between="8"
          :loop="true"
      >
        <SwiperSlide v-for="slide in items" :key="slide">
          <p-slider-news-item :item="slide"/>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
const items = ref([
    {
      img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
      title: 'Удивительный соблазн заблуждения',
      link: '/news/a'
    },
  {
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    title: 'Удивительный соблазн заблуждения',
    link: '/news/a'
  },{
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    title: 'Удивительный соблазн заблуждения',
    link: '/news/a'
  },{
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    title: 'Удивительный соблазн заблуждения',
    link: '/news/a'
  },{
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    title: 'Удивительный соблазн заблуждения',
    link: '/news/a'
  },{
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    title: 'Удивительный соблазн заблуждения',
    link: '/news/a'
  },{
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    title: 'Удивительный соблазн заблуждения',
    link: '/news/a'
  }])
</script>
<style scoped lang="scss">

</style>