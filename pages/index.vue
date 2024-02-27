<template>
  <p-main-banner :type="'welcome'"/>
  <p-slider-news/>
  <p-main-banner :type="'services'"/>
  <p-slider-help @open-modal="openModal"/>
  <p-main-banner :type="'form'"/>
</template>
<script setup lang="ts">
import {ref} from 'vue';
const emit = defineEmits(["open-modal"]);
const openModal = (item) => {
  emit('open-modal', item)
}
</script>