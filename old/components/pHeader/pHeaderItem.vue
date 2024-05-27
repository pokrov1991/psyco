<template>
  <div class="p-header-item">
    <div v-if="isLink" class="p-header-item__elem">
      <nuxt-link :class="'p-header-item__elem-link'" :to="item.src">
        <span :class="'p-header-item__elem-text'"  v-html="item.text"></span>
      </nuxt-link>
    </div>
    <div @click="clickItem" v-else class="p-header-item__elem">
      <span :class="'p-header-item__elem-text'">{{item.text}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, withDefaults} from 'vue';
const emit = defineEmits(['open-form']);
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
  emit('open-form')
}

// Emits

</script>

<style scoped>

</style>