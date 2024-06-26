<template>
  <UButton
    class="button"
    v-bind="$attrs"
  >
    <slot></slot>
  </UButton>
</template>

<script setup lang="ts">
  import './Button.scss'
</script>