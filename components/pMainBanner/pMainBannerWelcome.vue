<template>
  <div class="p-main-banner-welcome">
    <div class="p-main-banner-welcome__container">
      <div class="p-main-banner-welcome__wrapper">
        <div class="p-main-banner-welcome__row">
          <div class="p-main-banner-welcome__head">{{item.info.title}}</div>
          <div class="p-main-banner-welcome__content" v-html="item.info.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item: {
    type: string,
    src: string,
    info: {
      title: string,
      description: string
    }
  }
}
const props = withDefaults( defineProps<Props>(), {
  item: {
    type: 'services',
    src: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    info: {
      title: 'welcome',
      description: 'Заполните небольшую анкетуи запишитесь на консультацию'
    }
  }
});
</script>

<style scoped>

</style>