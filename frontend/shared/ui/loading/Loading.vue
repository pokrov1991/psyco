<template>
  <div v-if="props.value" class="loading">
    <div class="loading-spinner"></div>
  </div>
</template>

<script setup lang="ts">
  import './Loading.scss'

  const props = defineProps({
    value: {
      type: Boolean,
      default: false,
    },
  })
</script>
