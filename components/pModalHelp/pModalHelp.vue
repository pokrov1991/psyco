<template>
<PModal @close="closeModal">
  <template #title> Some title </template>
  <template #body>
    <div class="p-modal-help__container">
      <div class="p-modal-help__img">
        <img :src="item.img"/>
      </div>
      <div class="p-modal-help-content">
        <div class="p-modal-help-content__title">{{item.title}}</div>
        <div class="p-modal-help-content__description">{{item.description}}</div>
      </div>
    </div>
    <div @click="openModalForm" class="p-modal-action"> Записаться</div>
  </template>
</PModal>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);
function closeModal() {
  emit("close");
}

const openModalForm = () => {
  closeModal()
}
interface Props {
  item: {
    img: string,
    title: string,
    description: string,
  }
}
const props = withDefaults( defineProps<Props>(), {
  item: {
    img: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
    link: '/news/a',
    title: 'Удивительный соблазн заблуждения',
    description: 'Оказание экстренной психологической помощи в сложной спортивной'
  }
});
</script>

<style scoped>

</style>