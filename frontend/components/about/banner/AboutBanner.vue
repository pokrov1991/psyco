<template>
  <div class="about-banner">
    <div class="about-banner__image"></div>

    <TopLine />

    <Section>
      <div class="about-banner__container">
        <div class="about-banner__description">
          <h4>Здравствуйте!</h4>

          <p>
            Меня зовут – Покровская Мария Геннадьевна, я – спортивный психолог.
          </p>

          <p>
            Оказываю психологическую помощь юным и профессиональным спортсменам,
            а так же консультирую родителей.
          </p>
        </div>

        <div class="about-banner__list">
          <div class="about-banner__column">
            За плечами 12 лет тренерской деятельности, высшее психологическое
            образование в ЯрГУ им. П.Г. Демидова, высшее физкультурное
            образование, переподготовка по спортивной психологии в НИБИС под
            руководством ведущих спортивных психологов страны.
          </div>

          <div class="about-banner__column">
            Буду рада быть полезной в решении ваших психологических задач на арене
            спорта.
          </div>
        </div>
      </div>
    </Section>

    <div class="about-banner__slogan">Спортивный психолог</div>
  </div>
</template>

<script setup lang="ts">
  import './AboutBanner.scss'
  import { Section } from "~/shared";
  import { TopLine } from "~/layouts/ui";
</script>
