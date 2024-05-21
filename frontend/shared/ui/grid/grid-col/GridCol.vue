<template>
  <div
    class="grid-col"
    :style="gridStyle"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps<{
  colSpan?: number
  rowSpan?: number
}>()

const gridStyle = computed(() => ({
  gridColumnEnd: props.colSpan ? `span ${props.colSpan}` : '',
  gridRowEnd: props.rowSpan ? `span ${props.rowSpan}` : ''
}))
</script>
