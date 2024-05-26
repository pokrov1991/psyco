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
      <div class="news-page__image"></div>
      <Section>
        <h2 class="news-page__title">{{ result.title }}</h2>
        <span class="news-page__date">{{ result.date }}</span>
      </Section>

      <Wave color="#cc171e" />
    </div>

    <div class="news-page__container">
      <Section>
        <div
          class="news-page__text"
          v-for="(item, index) in result.content"
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
import { Section } from "~/shared";
import { Wave, Slogan, TopLine } from "~/layouts";

const result = {
  title: "Удивительный соблазн заблуждения",
  date: "14 октября 2024",
  content: [
    {
      title: "Заголовок один",
      description:
        "Душа и психика спортсмена испытывает колоссальные нагрузки на протяжении всей спортивной карьеры, и своевременная помощь может стать тем самым спасательным кругом, а иногда компасом на пути к вершинам. Верю, что у каждого спортсмена свой индивидуальный путь, свой темп, свои взлеты и падения. Маршрут, который требует поддержки.",
    },
    {
      title: "Заголовок два",
      description:
        "Если вы чувствуете, что ребенок испытывает сложности в спортивной деятельности, я приглашаю вас на консультацию по спортивной психологии. Верю, что у каждого спортсмена свой индивидуальный путь, свой темп, свои взлеты и падения. Маршрут, который требует поддержки.",
    },
  ],
};
</script>
