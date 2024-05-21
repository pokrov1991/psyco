
<template>
  <header class="header">
    <div class="header__contacts">
      <div class="header__address">г. Ярославль, Лисицина 2В </div>
      |
      <div class="header__phone">
        <span>+ 7 (901) 485 44-29</span>

        <a href="tel:+ 7 (901) 485 44-29">
          Запись на консультацию
        </a>
      </div>
    </div>

    <div class="header__menu">
      <ULink class="header__menu-item" v-for="(item, index) in menuItems" :to="item.link" :key="index">
        {{ item.name }}
      </ULink>
    </div>
  </header>
</template>

<script setup lang="ts">
const menuItems = [
  {
    name: 'Услуги',
    link: '/services'
  },
  {
    name: 'О себе',
    link: '/about'
  },
  {
    name: 'Контакты',
    link: '/contacts'
  },
  {
    name: 'Запись',
    link: '/entry'
  },
]
</script>
