<template>
  <nuxt-link :to="item.link" class="p-slider-news-item">
    <div class="p-slider-news-item__container">
      <div class="p-slider-news-item__row">
        <div class="p-slider-news-item__row-img">
          <img :src="item.img" alt="">
        </div>
        <div class="p-slider-news-item__row-content">
          <span class="p-slider-news-item__row-title"> {{item.title}}</span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script setup lang="ts">
interface Props {
  item: {
    img: string,
    title: object,
    link: string
  }
}
const props = withDefaults( defineProps<Props>(), {
  item: {
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    link: '/news/a',
    title: 'Удивительный соблазн заблуждения'
  }
});
</script>


<style lang="scss">
@import "pSliderNews";
</style>