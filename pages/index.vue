<template>
  <p-main-banner/>
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
</script>