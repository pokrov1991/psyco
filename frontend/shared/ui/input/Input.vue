
<template>
  <div class="p-input">
    <div class="p-input__label" v-if="$slots.label">
      <slot name="label"></slot>
    </div>

    <UInput v-bind="$attrs" variant="none" />

    <div class="p-input__icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
