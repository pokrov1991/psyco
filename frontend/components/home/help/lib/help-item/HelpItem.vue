
<template>
  <div class="help-item">
    <div class="help-item__image">
      <img :src="`/help/${props.item.id}.jpg`" :alt="props.item.title" draggable="false">
    </div>

    <div class="help-item__content">
      <h3>{{ props.item.title }}</h3>

      <div v-html="props.item.desc"></div>
    </div>

    <div class="help-item__action" @click="onClickMore">
      <Icon name="fa:tag" color="#d1232a" size="10"/>

      Подробнее

      <span>
        <Icon name="prime:angle-right" color="#fff" size="42"/>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import './HelpItem.scss'

  const props = defineProps<{item: IItem}>()
  const emit = defineEmits(['more'])

  interface IItem {
    id: number
    title: string
    desc: string
  }

  function onClickMore() {
    emit('more', props.item)
  }
</script>
