<template>
  <p-main-banner :item="welcomeConfig"/>
  <p-slider-news/>
  <p-main-banner :item="servicesConfig"/>
  <p-slider-help />
  <p-main-banner :item="formConfig"/>
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
const formConfig = ref( {
  type: 'form',
  src: 'https://assets.volkswagen.com/is/image/volkswagenag/VW_NGW6_Showroom_Arteon_Performance_Imagery_DrivingHandling-2?Zml0PWNyb3AlMkMxJndpZD04MDAmaGVpPTQ1MCZmbXQ9anBlZyZxbHQ9NzkmYmZjPW9mZiZiYTQz',
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