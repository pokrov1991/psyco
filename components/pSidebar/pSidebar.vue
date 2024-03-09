<template>
  <div class="p-sidebar" :class="{'p-sidebar__active': active}">
    <div class="p-sidebar__overlay" @click="toggleSidebar"></div>
    <div class="p-sidebar__container">
      <div class="p-sidebar__logo" @click="home"></div>
      <div class="p-sidebar__toggle" @click="toggleSidebar"></div>
      <div class="p-sidebar__wrapper">
        <div class="p-sidebar__row">
          <div class="p-sidebar__row-item" @click="checkLink(item)" v-for="(item,index) in sidebarList" :key="index">
            {{item.text}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref, defineProps, defineEmits, withDefaults} from "vue";


const active = ref(false)
const toggleSidebar = () => {
  active.value = !active.value
  emit('active-sidebar', active.value)

}
const emit = defineEmits(['open-form', 'active-sidebar'])
const sidebarList = ref([{text: 'услуги', src:'/services'}, {text: 'о себе', src: '/about'},{text: 'контакты', src: '/contacts'},{text: 'Запись'}])
const home = () => {
  // router.push('/')
}
const checkLink = (item) => {
  if(typeof item.src !== 'undefined') {
    // TO DO router
    ///router.push(item.src)
  } else {
    emit('open-form')
  }
}
</script>

<style lang="scss">
@import "pSidebar";
</style>