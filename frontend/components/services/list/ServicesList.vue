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

        <HelpView 
          v-model="helpViewOpen"
          :id="helpViewId"
          :title="helpViewTitle"
          :desc="helpViewDesc"
          @subscribe="onSubscribe"
        />
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { Section } from "~/shared";
import { useFeedbackFormController } from "~/components/feedback-form";
import { HelpItem, HelpView } from "~/components/home/help/lib";
import { helpItems as items } from "~/api";

const feedbackFormController = useFeedbackFormController();

const helpViewOpen = ref(false);
const helpViewId = ref(1);
const helpViewTitle = ref('');
const helpViewDesc = ref('');

function onMore(item: { id: number; title: string; desc: string; }) {
  const { id, title, desc } = item
  helpViewOpen.value = true;
  helpViewId.value = id;
  helpViewTitle.value = title;
  helpViewDesc.value = desc;
}

function onSubscribe() {
  feedbackFormController.openModal();
}
</script>
