<template>
<div class="p-advantages">
  <div class="p-advantages__container">
    <div class="p-advantages__wrapper">
      <div class="p-advantages__row">
        <div class="p-advantages__row-item seo" v-html="info.seo"></div>
        <div class="p-advantages__row-item advantages">
          <div class="p-advantages-item__row-title">Работая со мной, вы всегда можете рассчитывать на:</div>
          <div class="p-advantages__item-advantage" v-for="(item, index) in info.advantages" :key="index" v-html="item"></div>
          <div class="p-advatages__row-subtitle">На этом сайте вы можете ознакомиться с материалами, которые возможно помогут вам в осознании некоторых вопрос.</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const info = ref({})
const {data: item} = await useFetch('/api/get-advantages')
info.value = item.value.data
</script>

<style lang="scss">
@import "pAdvantages";
</style>