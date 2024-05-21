
<template>
  <div class="help-item">
    <div class="help-item__image">
      <img :src="props.item.image" alt="">
    </div>

    <div class="help-item__content">
      <h3>{{ props.item.title }}</h3>

      <p>
       {{ props.item.desc }}
      </p>
    </div>

    <div class="help-item__action">
      <Icon name="fa:tag" color="#d1232a" size="10"/>

      Подробнее

      <span @click="onClickMore">
        <Icon name="prime:angle-right" color="#fff" size="42"/>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">

import { defineProps, defineEmits } from "vue"
import { useRouter } from 'vue-router'
const props = defineProps<{item: IItem}>()
const router = useRouter()
const emit = defineEmits(['more'])

interface IItem {
  id: number
  title: string
  desc: string
  image: string
}

function onClickMore() {
  emit('more')
}
</script>
