<template>
  <div class="textarea" :class="{ 'is-dark': props.darkTheme }">
    <div class="textarea__label" v-if="$slots.label">
      <slot name="label"></slot>
    </div>

    <UTextarea v-bind="$attrs" variant="none" />

    <div class="textarea__icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from "vue";
  import './Textarea.scss'

  const props = defineProps<{ darkTheme?: boolean }>();
</script>
