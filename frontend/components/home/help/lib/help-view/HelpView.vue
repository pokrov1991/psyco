
<template>
  <Modal v-model="model">
    <div class="help-view-modal">
      <div class="help-view-modal__image">
        <img :src="image" alt="image">
        <Wave color="#cc171e" />
      </div>

      <div class="help-view-modal__content">
        <h3 class="help-view-modal__title">Мотивация</h3>

        <div class="help-view-modal__description">
          <p>
            Формирование индивидуальной мотивации на основе личностных особенностей спортсмена. Поставновка долгосрочных целей и плана их реализации
          </p>

          <p>
            Проработка соревновательного опыта и подготовка рекомегдаций по коррекции психологической подгтовки и тренировочного процесса
          </p>

          <p>
            Работа а эмоциями, мешающими эффективной деятельности проработка негативного поведения
          </p>
        </div>
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
import { defineModel, defineEmits } from 'vue';
import image from '../../../../../app/assets/images/home/help/index.png'
import { Modal, Button } from "~/shared";
import { Wave } from "~/layouts";

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

