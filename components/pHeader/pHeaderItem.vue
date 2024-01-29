<template>
  <div class="p-header-item">
    <div v-if="isLink" class="p-header-item__elem">
      <nuxt-link :class="'p-header-item__elem-link'" :to="item.src"></nuxt-link>
      <span :class="'p-header-item__elem-text'" v-html="item.text"></span>
    </div>
    <div @click="clickItem" v-else class="p-header-item__elem">
      <span :class="'p-header-item__elem-text'">{{item.text}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
interface Props {
  item: {
    src?: string,
    text: string,
  },
}
// Props
const props = withDefaults( defineProps<Props>(), {
  item: {
    src: 'aaaa',
    text: 'some text'
  }
});
// Computed
const isLink = computed(() => {
  return typeof props.item.src !== 'undefined'
})

// Methods
const clickItem = () => {
  console.log('here')
  emit('click')
}

// Emits
const emit = defineEmits(['click']);
</script>

<style scoped>

</style>