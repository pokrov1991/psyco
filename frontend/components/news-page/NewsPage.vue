<template>
  <div class="news-page">
    <TopLine />

    <Slogan>
      <template #default>
        <span>Жизнь</span>
        <span>Спорт</span>
      </template>

      <template #second>
        <span>sport</span>
        <span>psyhology</span>
      </template>
    </Slogan>

    <div class="news-page__banner">
      <div class="news-page__image" :style="{ backgroundImage: `url(/news/${article?.id}.jpg)` }"></div>
      <Section>
        <h2 class="news-page__title">{{ article?.title }}</h2>
        <span class="news-page__date">{{ article?.date }}</span>
      </Section>

      <Wave color="#cc171e" class="wave_news" />
    </div>

    <div class="news-page__container">
      <Section>
        <div
          class="news-page__text"
          v-for="(item, index) in article?.content"
          :key="index"
        >
          <h4>{{ item.title }}</h4>

          <p>{{ item.description }}</p>
        </div>
      </Section>
    </div>
  </div>
</template>

<script setup lang="ts">
  import './NewsPage.scss'
  import { Section } from "~/shared";
  import { Wave, Slogan, TopLine } from "~/layouts/ui";
  import { newsItems as items } from "~/api";

  const runtimeConfig = useRuntimeConfig()
  const route = useRoute()
  const article = items.find((item) => item.id === Number(route.params.id))

  const emit = defineEmits(['title','description','image'])

  emit('title', article?.title)
  emit('description', article?.description)
  emit('image', `${runtimeConfig.public.BASE_URL}/news/${article?.id}.jpg`)
</script>
