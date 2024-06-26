<template>
  <header class="header">
    <div class="header__contacts">
      <div class="header__address">г. Ярославль, ул. Володарского, 3</div>
      <small>|</small>
      <div class="header__phone">
        <span>+ 7 (901) 485 44-29</span>

        <p @click="feedbackFormController.openModal()"> Запись на консультацию </p>
      </div>
    </div>

    <div class="header__burger" @click="isActive = !isActive">
      <Icon name="fa:navicon" color="#fff" size="18" />
    </div>

    <div class="header__menu" :class="{ 'is-active': isActive }">
      <div class="header__menu-container">
        <ULink
          class="header__menu-item"
          v-for="(item, index) in menuItems"
          :to="item.link"
          :key="index"
          active-class="is-active"
        >
          {{ item.name }}
        </ULink>

        <div class="header__close" @click="isActive = false">
          <Icon name="ic:round-close" color="#000" size="32" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import './Header.scss'
  import { ref } from "vue";
  import { useFeedbackFormController } from "~/components/feedback-form/lib";

  const feedbackFormController = useFeedbackFormController();

  const isActive = ref(false);

  const menuItems = [
    {
      name: "Услуги",
      link: "/services",
    },
    {
      name: "О себе",
      link: "/about",
    },
    {
      name: "Контакты",
      link: "/contacts",
    },
  ];
</script>
