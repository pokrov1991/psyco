<template>
  <div class="p-main-banner" :class="'p-main-banner__' + item.type">
    <img :src="item.src" :class="'p-main-banner__img'" alt="">
    <div class="p-main-banner__container">
      <p-main-banner-welcome v-if="item.type === 'welcome'"/>
      <p-main-banner-services v-if="item.type === 'services'"/>
      <p-main-banner-form v-if="item.type === 'form'"/>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  item: {
    src: string,
    type: string,
    info: object
  }
}
const props = withDefaults( defineProps<Props>(), {
  item: {
    src: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    type: 'welcome',
    info: {
      title: 'Спортивный психолог',
      description: 'выаыв'
    }
  }
});

</script>

<style scoped>
@import "pMainBanner.scss";
</style>