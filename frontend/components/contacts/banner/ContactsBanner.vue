<template>
  <div class="contacts-banner">
    <div class="contacts-banner__image"></div>

    <TopLine />

    <Section>
      <div class="contacts-banner__container">
        <div class="contacts-banner__description">
          <h4>Контакты</h4>

          <p>Если вы не смогли дозвониться, мы обязательно с вами свяжемся</p>
        </div>

        <div class="contacts-banner__list">
          <div class="contacts-banner__column">
            <p>
              Телефон:
              <a href="tel:+7 (961) 026-12-13" target="_blank">
                +7 (961) 026-12-13
              </a>
            </p>

            <p>
              Телеграм:

              <a href="https://tl.com/kissa" target="_blank"
                >https://tg.com/kissa</a
              >
            </p>
          </div>

          <div class="contacts-banner__column">
            <p>
              Адрес:
              <a
                target="_blank"
                href="https://www.google.com/maps/place/%D0%B3.+%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C,+%D0%9B%D0%B8%D1%81%D0%B8%D1%86%D0%B8%D0%BD%D0%B0+2%D0%92/@57.6175481,39.8534002,3a,75y,46.6h,90t/data=!3m4!1e1!3m2!1sLSv-Na56q_aH6kJ_fUr4og!2e0!4m2!3m1!1s0x46b293c2cfa88e2d:0xb61722719329099b?sa=X&ved=1t:3780&ictx=111"
                >г. Ярославль, ул. Володарского, 3</a
              >
            </p>
          </div>
        </div>
      </div>
    </Section>

    <div class="contacts-banner__slogan">Где мой офис</div>
  </div>
</template>

<script setup lang="ts">
import './ContactsBanner.scss'
import { Section } from "~/shared";
import { TopLine } from "~/layouts/ui";
</script>
