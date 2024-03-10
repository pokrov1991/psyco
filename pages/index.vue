<template>
  <p-main-banner :type="'welcome'"/>
  <p-slider-news/>
  <p-main-banner :type="'services'"/>
  <p-slider-help @open-form="openForm"/>
</template>
<script setup lang="ts">
import {ref,defineEmits} from 'vue';
const emit = defineEmits(["open-form"]);
const openForm = () => {
  emit('open-form')
}
</script>