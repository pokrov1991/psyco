<template>
  <div class="p-main-banner-form">
    <div class="p-main-banner-form__container">
      <div class="p-main-banner-form__wrapper">
        <div class="p-main-banner-form__row">
          <div class="p-main-banner-form__title">
            <h1>{{item.info.title}}</h1>
          </div>
          <div class="p-main-banner-form__subtitle">
            {{item.info.subtitle}}
          </div>
          <div @click="openForm" class="p-main-banner-form__action">
            Записаться
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineEmits} from 'vue'

const emit = defineEmits('open-form')
interface Props {
  item: {
    type: string,
    src: string,
    info: {
      title: string,
      subtitle: string
    }
  }
}
const props = withDefaults( defineProps<Props>(), {
  item: {
    type: 'form',
    src: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    info: {
      title: 'welcome',
      subtitle: 'Заполните небольшую анкетуи запишитесь на консультацию'
    }
  }
});

const openForm = () => {
  emit('open-form')
}
</script>

<style scoped>

</style>