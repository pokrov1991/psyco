

<template>
  <div class="home-help">
    <Section>
      <h2 class="home-help__title">
        <span>Помощь</span> / в решени вопросов
      </h2>

      <div class="home-help__slider">
        <UCarousel v-slot="{ item }" :items="items" class="home-help__slider-container">
          <HelpItem :item="item" @more="onMore"/>
        </UCarousel>

        <HelpView v-model="helpViewOpen" @subscribe="onSubscribe"/>
      </div>
    </Section>
  </div>
</template>


<script setup lang="ts">
import image from '../../../app/assets/images/home/help/index.png'
import { Section } from "~/shared";
import HelpItem from "~/components/home/help/lib/help-item/HelpItem.vue";
import HelpView from "~/components/home/help/lib/help-view/HelpView.vue";

const items = [
  {
    id: 1,
    title: 'Психодиагностика',
    desc: 'Проведение психодиагностики и подготовка объективной информации об особенностях личности и дополнительных «ресурсах» спортсмена.',
    image: image
  },
  {
    id: 2,
    title: 'Психодиагностика',
    desc: 'Проведение психодиагностики и подготовка объективной информации об особенностях личности и дополнительных «ресурсах» спортсмена.',
    image: image
  },
  {
    id: 3,
    title: 'Психодиагностика',
    desc: 'Проведение психодиагностики и подготовка объективной информации об особенностях личности и дополнительных «ресурсах» спортсмена.',
    image: image
  },
  {
    id: 4,
    title: 'Психодиагностика',
    desc: 'Проведение психодиагностики и подготовка объективной информации об особенностях личности и дополнительных «ресурсах» спортсмена.',
    image: image
  }
]

const helpViewOpen = ref(false)

function onMore() {
  helpViewOpen.value = true
}

function onSubscribe() {

}
</script>