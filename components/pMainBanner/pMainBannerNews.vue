<template>
  <div class="p-main-banner-news">
    <div class="p-main-banner-news__container">
      <div class="p-main-banner-news__wrapper">
        <div class="p-main-banner-news__row">
          <div class="p-main-banner-news__head">{{item.title}}</div>
          <div class="p-main-banner-news__date">{{item.date}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item?: {
    type: string,
    src: string,
    info: {
      title: string,
      description: string
    },
    date: string,
  }
}
const props = withDefaults( defineProps<Props>(), {
  item: {
    type: 'services',
    src: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    info: {
      title: 'welcome',
      description: 'Заполните небольшую анкетуи запишитесь на консультацию'
    },
    date: 'May 25, 2022 13:30:00'
  }
});
</script>

<style scoped>

</style>