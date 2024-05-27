<template>
  <div class="p-select-menu" :class="{ 'is-dark': props.darkTheme }">
    <div class="p-select-menu__label" v-if="$slots.label">
      <slot name="label"></slot>
    </div>

    <USelectMenu v-bind="$attrs" variant="none" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{ darkTheme?: boolean }>();
</script>
