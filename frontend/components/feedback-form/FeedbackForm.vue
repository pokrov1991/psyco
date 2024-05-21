
<template>
  <UModal v-model="model">
    <div class="help-view-modal">
      <div class="help-view-modal__action">
        <Button @click="onClickSubscribe">
          Записаться »
        </Button>
      </div>
    </div>
  </UModal>
</template>


<script setup lang="ts">
import { defineModel, defineEmits } from 'vue';
import { Button } from "~/shared";
const model = defineModel()
const emit = defineEmits(['submit'])

function onClickClose () {
  model.value = false
}

function onClickSubscribe () {
  onClickClose()
  emit('submit')
}
</script>

