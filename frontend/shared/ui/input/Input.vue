<template>
  <div class="p-input" :class="{ 'is-dark': darkTheme }">
    <div class="p-input__label" v-if="$slots.label">
      <slot name="label"></slot>
    </div>

    <UInput v-bind="$attrs" variant="none" />

    <div class="p-input__icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{ darkTheme?: boolean }>();
</script>
