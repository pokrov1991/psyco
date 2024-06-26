<template>
  <div class="grid-container" :class="gridCountClass">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue'

const props = defineProps<{
  /* Служит для кол-ва колонок */
  colCount?: number
}>()

const gridCountClass = computed(() => {
  return `grid-container_count-${props.colCount || 1}`
})

provide('colCount', props.colCount)
</script>
