

<template>
    <div class="home-news">
      <Section>
        <h2 class="home-news__title">
          Последние статьи и новости
        </h2>

        <div class="home-news__slider" ref="slider">
          <UCarousel v-slot="{ item }" :items="items" class="home-news__slider-container">
            <NewsItem :item="item" />
          </UCarousel>
        </div>
      </Section>
    </div>
</template>

<script setup lang="ts">
  import './HomeNews.scss'
  import { ref } from 'vue'
  import { useSliderSize } from '~/app/assets/utils'
  import { Section } from "~/shared"
  import NewsItem from "~/components/home/news/lib/news-item/NewsItem.vue"
  import { newsItems as items } from "~/api";

  const slider = ref<HTMLDivElement | null>(null)
  const { sliderWidth } = useSliderSize({ containerRef: slider })
</script>