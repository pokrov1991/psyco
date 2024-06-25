<template>
  <NuxtLayout>
    <ServicesBanner />
    <ServicesList />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const runtimeConfig = useRuntimeConfig()

  useSeoMeta({
    title: 'Услуги спортивного психолога - Мария Покровская',
    ogTitle: 'Услуги спортивного психолога - Мария Покровская',
    description: 'Помощь в решении вопросов: психодиагностика, экстренная помощь, травма, конфликты, саморегуляция, оптимальное боевое состояние, самореализация, анализ, мотивации, релаксация, эмоции',
    ogDescription: 'Помощь в решении вопросов: психодиагностика, экстренная помощь, травма, конфликты, саморегуляция, оптимальное боевое состояние, самореализация, анализ, мотивации, релаксация, эмоции',
    ogImage: `${runtimeConfig.public.BASE_URL}/cover.jpg`,
  })
</script>
