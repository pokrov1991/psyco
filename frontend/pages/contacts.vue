<template>
  <NuxtLayout>
    <ContactsBanner />
    <ContactsMap />
  </NuxtLayout>
</template>
<script setup lang="ts">
  const runtimeConfig = useRuntimeConfig()

  useSeoMeta({
    title: 'Спортивный психолог - г. Ярославль, ул. Володарского, 3',
    ogTitle: 'Спортивный психолог - г. Ярославль, ул. Володарского, 3',
    description: 'Помощь спортивного психолога в Ярославле на ул. Володарского, 3. Запишитесь на консультацию по телефону +7 (961) 026-12-13 и сделайте первый шаг к новым спортивным достижениям.',
    ogDescription: 'Помощь спортивного психолога в Ярославле на ул. Володарского, 3. Запишитесь на консультацию по телефону +7 (961) 026-12-13 и сделайте первый шаг к новым спортивным достижениям.',
    ogImage: `${runtimeConfig.public.BASE_URL}/cover.jpg`,
  })
</script>
