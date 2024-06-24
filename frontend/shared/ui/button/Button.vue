<template>
  <UButton
    class="button"
    v-bind="$attrs"
    variant="none"
  >
    <slot></slot>
  </UButton>
</template>

<script setup lang="ts">
  import './Button.scss'
</script>