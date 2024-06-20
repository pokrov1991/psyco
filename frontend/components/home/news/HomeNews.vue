

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
import { ref } from 'vue'
import { useSliderSize } from '~/app/assets/utils'
import { Section } from "~/shared"
import image from '../../../app/assets/images/home/news/index.png'
import NewsItem from "~/components/home/news/lib/news-item/NewsItem.vue"

const items = [
  {
    id: 1,
    title: 'Удивительный соблазн заблуждения',
    image: image
  },
  {
    id: 2,
    title: 'Удивительный соблазн заблуждения',
    image: image
  },
  {
    id: 3,
    title: 'Удивительный соблазн заблуждения',
    image: image
  },
  {
    id: 4,
    title: 'Удивительный соблазн заблуждения',
    image: image
  },
  {
    id: 5,
    title: 'Удивительный соблазн заблуждения',
    image: image
  },
  {
    id: 6,
    title: 'Удивительный соблазн заблуждения',
    image: image
  },
]

const slider = ref<HTMLDivElement | null>(null)
const { sliderWidth } = useSliderSize({ containerRef: slider })
</script>