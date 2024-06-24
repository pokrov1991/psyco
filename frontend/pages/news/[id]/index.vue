<template>
  <NuxtLayout>
    <NewsPage 
      @title="onTitle" 
      @description="onDescription" 
      @image="onImage"
    />
  </NuxtLayout>
</template>
<script setup lang="ts">
  const title = ref('Спортивный психолог')
  const ogTitle = ref(title)
  const description = ref('Новость спортивной психологии')
  const ogDescription = ref(description)
  const ogImage = ref('https://psysport.ru/cover.jpg')

  const onTitle = (value: string) => {
    title.value = value
    ogTitle.value = value
  }

  const onDescription = (value: string) => {
    description.value = value
    ogDescription.value = value
  }

  const onImage = (value: string) => {
    ogImage.value = value
  }

  useSeoMeta({
    title,
    ogTitle: ogTitle,
    description: description,
    ogDescription: ogDescription,
    ogImage: ogImage,
  })
</script>
