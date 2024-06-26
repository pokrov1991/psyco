<template>
  <div class="home-help">
    <Section>
      <h2 class="home-help__title"><span>Помощь</span> / в решени вопросов</h2>

      <div class="home-help__slider" ref="slider">
        <UCarousel
          v-slot="{ item }"
          :items="items"
          class="home-help__slider-container"
        >
          <HelpItem :item="item" @more="onMore" />
        </UCarousel>

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
  import './HomeHelp.scss'
  import { ref } from 'vue'
  import { useSliderSize } from '~/app/assets/utils'
  import { Section } from "~/shared";
  import { HelpItem, HelpView } from "./lib";
  import { useFeedbackFormController } from "~/components/feedback-form/lib";
  import { helpItems as items } from "~/api";

  const slider = ref<HTMLDivElement | null>(null)
  const { sliderWidth } = useSliderSize({ containerRef: slider })

  const helpViewOpen = ref(false);
  const helpViewId = ref(1);
  const helpViewTitle = ref('');
  const helpViewDesc = ref('');
  const feedbackFormController = useFeedbackFormController();

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
