<template>
  <div class="select-menu" :class="{ 'is-dark': props.darkTheme }">
    <div class="select-menu__label" v-if="$slots.label">
      <slot name="label"></slot>
    </div>

    <USelectMenu v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
  import './SelectMenu.scss'

  const props = defineProps<{ darkTheme?: boolean }>();
</script>
