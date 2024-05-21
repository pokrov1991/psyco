<template>
  <div class="p-main-banner-services">
    <div class="p-main-banner-services__container">
      <div class="p-main-banner-services__wrapper">
        <div class="p-main-banner-services__row">
          <div class="p-main-banner-services__row-info">
            <div class="p-main-banner-services__title" v-html="item.info.title"></div>
            <div class="p-main-banner-services__subtitle" v-html="item.info.subtitle"></div>
            <div class="p-main-banner-services__content" v-html="item.info.content"></div>
          </div>
          <div class="p-main-banner-services__row-list">
            <div class="p-main-banner-services__row-list-item" v-for="(item,index) in item.list" :key="index" v-html="item.text"></div>
          </div>
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
      subtitle: string
    }
  }
}
const props = withDefaults( defineProps<Props>(), {
  item: {
    type: 'services',
    src: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    info: {
      title: 'welcome',
      subtitle: 'Заполните небольшую анкетуи запишитесь на консультацию'
    }
  }
});
</script>

<style scoped>

</style>