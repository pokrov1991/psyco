<template>
  <div @click="openModal(item)" class="p-slider-help-item">
    <div class="p-slider-help-item__container">
      <div class="p-slider-help-item__row">
        <div class="p-slider-help-item__row-img">
          <img :src="item.img" alt="">
        </div>
        <div class="p-slider-help-item__row-content">
          <div class="p-slider-help-item__row-title"> {{item.title}}</div>
          <div class="p-slider-help-item__row-description" v-html="item.description"></div>
          <div class="p-slider-help-item__row-action">
            <div class="p-slider-help-item__row-action-more">Подробнее</div>
            <div class="p-slider-help-item__row-action-button"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p-modal-help @open-form="openForm" :item="item" @close="closeModal" v-if="isOpen"/>
</template>
<script setup lang="ts">
import { ref } from "vue";
interface Props {
  item: {
    img: string,
    title: string,
    description: string,
    link: string
  }
}
const emit = defineEmits(["open-modal", 'open-form']);
const props = withDefaults( defineProps<Props>(), {
  item: {
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    link: '/news/a',
    title: 'Удивительный соблазн заблуждения',
    description: 'Оказание экстренной психологической помощи в сложной спортивной'
  }
});
const isOpen = ref(false);
const openModal = (item) => {
  emit('open-modal', item)
  isOpen.value = true;
}
const openForm = () => {
  emit('open-form')
}
const closeModal = () => {
  isOpen.value = false;
}
</script>


<style lang="scss">
@import "pSliderHelp";
</style>