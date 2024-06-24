<template>
  <div class="select-menu" :class="{ 'is-dark': props.darkTheme }">
    <div class="select-menu__label" v-if="$slots.label">
      <slot name="label"></slot>
    </div>

    <USelectMenu v-bind="$attrs" variant="none" />
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from "vue";
  import './SelectMenu.scss'

  const props = defineProps<{ darkTheme?: boolean }>();
</script>
