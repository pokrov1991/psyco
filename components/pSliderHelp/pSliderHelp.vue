<template>
<div class="p-slider-help">
  <div class="p-slider-help__container">
    <div class="p-slider-help__wrapper">
      <div class="p-slider-help__title">
        <h3>Помощь</h3> <span>/ в решении вопросов</span>
      </div>
      <Swiper
          :class="'p-slider-help__slider'"
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :slides-per-view="4.5"
          :space-between="8"
          :loop="true"
      >
        <SwiperSlide v-for="slide in items" :key="slide">
          <p-slider-help-item :item="slide"/>
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
      link: '/ /a',
      description: 'Оказание экстренной психологической помощи в сложной спортивной'
    },
  {
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    title: 'Удивительный соблазн заблуждения',
    link: '/news/a',
    description: 'Оказание экстренной психологической помощи в сложной спортивной'
  },{
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    title: 'Удивительный соблазн заблуждения',
    link: '/news/a',
    description: 'Оказание экстренной психологической помощи в сложной спортивной'
  },{
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    title: 'Удивительный соблазн заблуждения',
    link: '/news/a',
    description: 'Оказание экстренной психологической помощи в сложной спортивной'
  },{
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    title: 'Удивительный соблазн заблуждения',
    link: '/news/a',
    description: 'Оказание экстренной психологической помощи в сложной спортивной'
  },{
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    title: 'Удивительный соблазн заблуждения',
    link: '/news/a',
    description: 'Оказание экстренной психологической помощи в сложной спортивной'
  },{
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    title: 'Удивительный соблазн заблуждения',
    link: '/news/a',
    description: 'Оказание экстренной психологической помощи в сложной спортивной'
  }])
</script>
<style scoped lang="scss">

</style>