<template>
  <div class="slogan">
    <slot name="default"></slot>
  </div>

  <div class="slogan second">
    <slot name="second"></slot>
  </div>
</template>

<script setup lang="ts">
  import './Slogan.scss'
</script>