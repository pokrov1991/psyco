

<template>
  <div class="services-banner">
    <div class="services-banner__image"></div>

    <TopLine />

    <div class="services-banner__slogan">
      Услуги спортивного психолога
    </div>

    <Section>
      <div class="services-banner__container">
        <div class="services-banner__description">
          <h2>Услуги спортивного психолога</h2>

         <div class="services-banner__text">
           <p>
             Обращаю ваше внимание, что на первой консультации обязательно присутствие родителя спортсмена для оформления документов.
           </p>

           <p>
             Задать уточняющие вопросы относительно условий консультирования можно в личном сообщении в социальных сетях, написав мне в сообщении, а также по телефону: <a href="tel:+7 (961) 026-12-13">+7 (961) 026-12-13</a> в рабочее время.
           </p>
         </div>
        </div>

        <div class="services-banner__list">
          <div class="services-banner__list-column">
            <div class="services-banner__list-item">
              1. Девочки/Мальчики 7-10 лет
              группы начальной подготовки (НП)
              спортивно-оздоровительные (СОГ)
              1юн, 2юн, 3юн.
              <span>Консультация 60 мин. - 1200 р.</span>
            </div>

            <div class="services-banner__list-item">
              2. Девушки/Юноши 11-14 лет
              учебно-тренировочные группы (УТГ)
              3вз, 2вз
              <span>Консультация 1 ч. 15 мин. - 1500 р.</span>
            </div>
          </div>

          <div class="services-banner__list-column">
            <div class="services-banner__list-item">
              3. Девушки/Юноши 15-17 лет
              группы спортивного совершенствования (СС)
              1вз, КМС, МС, МСМК
              <span>Консультация 1 ч. 30 мин.- 2000 р.</span>
            </div>

            <div class="services-banner__list-item">
              4. Родители спортсменов
              <span>Консультация 50 мин. - 1000 р.</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>


<script setup lang="ts">
import { Section } from "~/shared";
import { TopLine } from "~/layouts";
</script>