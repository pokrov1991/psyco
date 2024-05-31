<template>
  <div class="footer">
    <div class="footer-banner">
      <div class="footer-banner__image"></div>

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
        <div class="footer-banner__content">
          <h1 class="footer-banner__title">Запись</h1>

          <div class="footer-banner__description">
            Заполните небольшую анкету и запишитесь на консультацию.
          </div>

          <div class="footer-banner__action">
            <Button @click="feedbackFormController.openModal">
              Записаться »
            </Button>
          </div>
        </div>
      </Section>

      <Wave color="#11161d" />
    </div>

    <div class="footer-content">
      <Logo />
      <Section>
        <div class="footer-content__wrapper">
          <div class="footer-content__copyright">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>Личное пространство (с) 2024 г. Все права защищены</p>
          </div>

          <div class="footer-content__social">
            <ULink v-for="(item, index) in socials" :key="index">
              <Icon :name="item.icon" color="#fff" size="20" />
            </ULink>
          </div>

          <div class="footer-content__contacts">
            <p>
              г. Ярославль, Лисицина 2В
              <a href="tel:+ 7 (901) 485 44-29"> Смотреть на карте </a>
            </p>

            <p>
              + 7 (901) 485 44 - 29
              <a href="tel:+ 7 (901) 485 44-29"> Записаться на консультацию </a>
            </p>

            <div class="footer-content__subscribe">
              <Input v-model="email" placeholder="Ваш электронный адрес">
                <template #label>Подпишитесь на наши новости</template>

                <template #icon>
                  <div class="footer-content__subscribe-action">
                    <Icon name="prime:angle-right" color="#d1232a" size="46" />
                  </div>
                </template>
              </Input>
            </div>
          </div>
        </div>
      </Section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Slogan, TopLine, Wave, Logo } from "~/layouts";
import { Button, Input, Section } from "~/shared/ui";
import { useFeedbackFormController } from "~/components/feedback-form";

const feedbackFormController = useFeedbackFormController();

const socials = [
  {
    name: "facebook",
    icon: "ri:facebook-fill",
    href: "/facebook.com",
  },
  {
    name: "twitter",
    icon: "ri:twitter-fill",
    href: "/twitter.com",
  },
  {
    name: "instagram",
    icon: "entypo-social:instagram",
    href: "/instagram.com",
  },
];

const email = ref("");
</script>
