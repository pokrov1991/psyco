<template>
  <div class="services-list">
    <Section>
      <h3 class="services-list__title">
        <span>Помощь</span> в решении вопросов
      </h3>

      <div class="services-list__container">
        <div
          class="services-list__item"
          v-for="(item, index) in items"
          :key="index"
        >
          <HelpItem :item="item" @more="onMore" />
        </div>

        <HelpView v-model="helpViewOpen" @subscribe="onSubscribe" />
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { Section } from "~/shared";
import image from "../../../app/assets/images/home/help/index.png";
import { useFeedbackFormController } from "~/components/feedback-form";
import { HelpItem, HelpView } from "~/components/home/help/lib";

const feedbackFormController = useFeedbackFormController();

const items = [
  {
    id: 1,
    title: "Психодиагностика",
    desc: "Проведение психодиагностики и подготовка объективной информации об особенностях личности и дополнительных «ресурсах» спортсмена.",
    image: image,
  },
  {
    id: 2,
    title: "Психодиагностика",
    desc: "Проведение психодиагностики и подготовка объективной информации об особенностях личности и дополнительных «ресурсах» спортсмена.",
    image: image,
  },
  {
    id: 3,
    title: "Психодиагностика",
    desc: "Проведение психодиагностики и подготовка объективной информации об особенностях личности и дополнительных «ресурсах» спортсмена.",
    image: image,
  },
  {
    id: 4,
    title: "Психодиагностика",
    desc: "Проведение психодиагностики и подготовка объективной информации об особенностях личности и дополнительных «ресурсах» спортсмена.",
    image: image,
  },
];

const helpViewOpen = ref(false);

function onMore() {
  helpViewOpen.value = true;
}

function onSubscribe() {
  feedbackFormController.openModal();
}
</script>
