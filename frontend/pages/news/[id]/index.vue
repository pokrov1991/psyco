<template>
  <NuxtLayout>
    <NewsPage @title="onTitle" @description="onDescription"/>
  </NuxtLayout>
</template>
<script setup lang="ts">
  const title = ref('Спортивный психолог')
  const ogTitle = ref(title)
  const description = ref('Новость спортивной психологии')
  const ogDescription = ref(description)

  const onTitle = (value: string) => {
    title.value = value
    ogTitle.value = value
  }

  const onDescription = (value: string) => {
    description.value = value
    ogDescription.value = value
  }

  useSeoMeta({
    title,
    ogTitle: ogTitle,
    description: description,
    ogDescription: ogDescription,
    ogImage: 'https://psysport.ru/cover.jpg',
  })
</script>
