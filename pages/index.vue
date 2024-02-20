<template>
  <p-main-banner :item="welcomeConfig"/>
  <p-slider-news/>
  <p-main-banner :item="servicesConfig"/>
  <p-slider-help />
</template>
<script setup lang="ts">
import {ref} from 'vue';

const servicesConfig = ref( {
  type: 'services',
  src: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
  info: {
    title: 'Спортивный психолог',
    description: 'выаыв'
  }
})
const welcomeConfig = ref({
  src: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
  type: 'welcome',
  info: {
    title: 'Спортивный психолог',
    description: 'выаыв'
  }
})
</script>