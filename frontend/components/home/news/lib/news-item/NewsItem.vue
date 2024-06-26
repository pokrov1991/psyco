
<template>
  <div class="news-item">
    <div class="news-item__image">
      <img :src="`/news/mini/${props.item.id}.jpg`" :alt="props.item.title" draggable="false">
      <div class="plus" @click="onOpenNewsPage">+</div>
    </div>

    <p class="news-item__title">{{ props.item.title }}</p>
  </div>
</template>

<script setup lang="ts">
  import './NewsItem.scss'
  import { useRouter } from 'vue-router'

  interface IItem {
    id: number
    title: string
  }

  const props = defineProps<{item: IItem}>()
  const router = useRouter()

  function onOpenNewsPage () {
    router.push(`/news/${props.item.id}`)
  }
</script>
