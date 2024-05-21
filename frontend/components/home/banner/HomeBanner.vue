<template>
  <div class="home-banner">
    <div class="home-banner__image"></div>

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

    <Section>
      <h1 class="home-banner__title">
        Спортивный <br />
        Психолог
      </h1>

      <div class="home-banner__description">
        <p>опыт тренера 12 лет</p>

        <h4>
          Мария <br />
          Покровская
        </h4>
      </div>

      <div class="home-banner__quote">
        Я уверена, каждый встречал людей, которые считают, что научившись
        манипулировать окружающими, они станут...

        <a class="app-link" href="">Подробнее »</a>
      </div>
    </Section>

    <Wave color="#cc171e" />
  </div>
</template>

<script setup lang="ts">
import { Section } from "~/shared";
import { Wave, Slogan, TopLine } from "~/layouts";
</script>
