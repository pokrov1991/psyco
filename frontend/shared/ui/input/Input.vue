<template>
  <div class="input" :class="{ 'is-dark': props.darkTheme }">
    <div class="input__label" v-if="$slots.label">
      <slot name="label"></slot>
    </div>

    <UInput v-bind="$attrs" />

    <div class="input__icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import './Input.scss'
  
  const props = defineProps<{ darkTheme?: boolean }>();
</script>
