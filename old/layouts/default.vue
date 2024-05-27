<template>
  <div class="app">
    <pHeader @open-form="openForm"/>
    <pSidebar @open-form="openForm"/>
    <NuxtPage @open-form="openForm"/>
    <p-main-banner @open-form="openForm" :type="'form'"/>
    <pFooter/>
    <PModalForm @close="closeForm" v-if="isOpenForm"/>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
let isOpenForm = ref(false)
const openForm = () => {
  isOpenForm.value = true
}
const closeForm = () => {
  isOpenForm.value = false
}
</script>