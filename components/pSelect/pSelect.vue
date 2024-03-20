<script setup lang="ts">
import {defineEmits, defineProps, withDefaults,ref} from "vue";

interface Props {
  list: [];
}
const emit = defineEmits(['value'])
const props = withDefaults( defineProps<Props>(), { list: ['aaa'] });
let selectedItem = ref(props.list[0])
let isOpened = ref(false)
const setValue = (elem) => {
 selectedItem.value = elem
  isOpened.value = false
  emit('value', elem)
}

const toggleSelect = () => {
  isOpened.value  = !isOpened.value
}
const closeSelect = () => {
  isOpened.value  = false
}
</script>

<template>
<div class="p-select" v-outside-click="closeSelect">
  <div class="p-select__container">
    <div class="p-select__wrapper">
      <div class="p-select__head" @click="toggleSelect">
        <p-select-item :value="selectedItem"/>
      </div>
      <div class="p-select__content" :class="{open: isOpened}">
        <p-select-item :value="item" @value="setValue"  v-for="(item, index) in list" :key="index"/>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
@import "pSelect";
</style>