<template>
  <header class="header">
    <div class="header__contacts">
      <div class="header__address">г. Ярославль, Лисицина 2В</div>
      <small>|</small>
      <div class="header__phone">
        <span>+ 7 (901) 485 44-29</span>

        <a href="tel:+ 7 (901) 485 44-29"> Запись на консультацию </a>
      </div>
    </div>

    <div class="header__burger" @click="isActive = !isActive">
      <Icon name="fa:navicon" color="#fff" size="18" />
    </div>

    <div class="header__menu" :class="{ 'is-active': isActive }">
      <ULink
        class="header__menu-item"
        v-for="(item, index) in menuItems"
        :to="item.link"
        :key="index"
        active-class="is-active"
      >
        {{ item.name }}
      </ULink>

      <div class="header__close">
        <Icon name="ic:round-close" color="#000" size="42" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
