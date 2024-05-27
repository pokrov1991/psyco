<template>
  <UModal v-model="model" class="modal">
    <div class="modal__component">
      <div class="modal__close" @click="onClickClose">
        <Icon name="material-symbols:close" color="#FFF" size="24" />
      </div>

      <slot></slot>
    </div>
  </UModal>
</template>

<script setup lang="ts">
import { defineModel, defineEmits } from "vue";
const emit = defineEmits(["close"]);
const model = defineModel();

function onClickClose() {
  model.value = false;
  emit("close");
}
</script>
