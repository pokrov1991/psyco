<template>
  <div class="skeleton" :style="{ height: `${styles}px` }"></div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import './Skeleton.scss'

  const props = defineProps<{ height?: number }>()

  const styles = computed(() => {
    return props.height || 48
  })
</script>