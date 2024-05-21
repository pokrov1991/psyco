
<template>
  <Modal v-model="isClose">
    <div class="feedback-form">
      <div class="feedback-form__title">Запись на консультацию</div>

      <div class="feedback-form__description">
        Пожалуйста заполните анкету и запишитесь на конмультацию в ближайщее время, с вами свяжуться для уточнения запроса.
      </div>

      <div class="feedback-form__container">
        <div></div>
      </div>
      <div class="feedback-form__action">
        <Button @click="sendForm">
          Записаться »
        </Button>
      </div>
    </div>
  </Modal>
</template>


<script setup lang="ts">
import { defineModel, defineEmits } from 'vue';
import { Modal, Button } from "~/shared";
import { useFeedbackFormController } from "~/components/feedback-form/lib";

const { model, sendForm } = useFeedbackFormController()
const isClose = defineModel()
const emit = defineEmits(['confirm'])

function onClickClose () {
  isClose.value = false
}

async function onClickSendForm() {
  await sendForm()
  emit('confirm')
}
</script>

