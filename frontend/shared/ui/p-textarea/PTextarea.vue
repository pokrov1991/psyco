<template>
  <div class="p-textarea" :class="{ 'is-dark': props.darkTheme }">
    <div class="p-textarea__label" v-if="$slots.label">
      <slot name="label"></slot>
    </div>

    <UTextarea v-bind="$attrs" variant="none" />

    <div class="p-textarea__icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{ darkTheme?: boolean }>();
</script>
