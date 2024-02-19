<template>
  <nuxt-link :to="item.link" class="p-slider-help-item">
    <div class="p-slider-help-item__container">
      <div class="p-slider-help-item__row">
        <div class="p-slider-help-item__row-img">
          <img :src="item.img" alt="">
        </div>
        <div class="p-slider-help-item__row-content">
          <div class="p-slider-help-item__row-title"> {{item.title}}</div>
          <div class="p-slider-help-item__row-description"> {{item.description}}</div>
          <div class="p-slider-help-item__row-action">
            <div class="p-slider-help-item__row-action-more"></div>
            <div class="p-slider-help-item__row-action-button"></div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script setup lang="ts">
interface Props {
  item: {
    img: string,
    title: string,
    description: string,
    link: string
  }
}
const props = withDefaults( defineProps<Props>(), {
  item: {
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    link: '/news/a',
    title: 'Удивительный соблазн заблуждения',
    description: 'Оказание экстренной психологической помощи в сложной спортивной'
  }
});
</script>


<style lang="scss">
@import "pSliderHelp";
</style>