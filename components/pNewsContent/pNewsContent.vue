<template>
<div class="p-news-content">
  <div class="p-news-content__container">
    <div class="p-news-content__wrapper">
      <div class="p-news-content__row">
        <div class="p-news-content__row-item" v-for="(item, index) in list" :key="index">
          <div class="p-news-content__row-item-title" v-html="item.title"></div>
          <div class="p-news-content__row-item-text" v-html="item.description"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
interface Props {
  list?: [
    {
      title: string,
      description: string,
    }
  ]
}
const props = defineProps<Props>()
</script>

<style>
@import "pNewsContent.scss";
</style>