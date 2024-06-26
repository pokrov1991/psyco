
<template>
  <Modal v-model="model">
    <div class="help-view-modal">
      <div class="help-view-modal__image">
        <img :src="`/help/${props.id}.jpg`" alt="image">
        <Wave color="#cc171e" />
      </div>

      <div class="help-view-modal__content">
        <h3 class="help-view-modal__title">{{ props.title }}</h3>

        <div class="help-view-modal__description" v-html="props.desc"></div>
      </div>

      <div class="help-view-modal__action">
        <Button @click="onClickSubscribe">
          Записаться »
        </Button>
      </div>
    </div>
  </Modal>
</template>


<script setup lang="ts">
  import './HelpView.scss'
  import { defineModel } from 'vue';
  import { Modal, Button } from "~/shared";
  import { Wave } from "~/layouts/ui";

  const props = defineProps<{
    id: number,
    title: string,
    desc: string
  }>()

  const model = defineModel()
  const emit = defineEmits(['subscribe'])

  function onClickClose () {
    model.value = false
  }

  function onClickSubscribe () {
    onClickClose()
    emit('subscribe')
  }
</script>

