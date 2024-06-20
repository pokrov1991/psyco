<template>
  <div class="wave">
    <svg v-if="variant === 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path :fill="props.color" fill-opacity="1" d="M0,32L48,58.7C96,85,192,139,288,160C384,181,480,171,576,176C672,181,768,203,864,224C960,245,1056,267,1152,240C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <svg v-if="variant === 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path :fill="props.color" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,213.3C672,203,768,213,864,218.7C960,224,1056,224,1152,192C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <img :src="waweBefore"/>
  </div>
</template>


<script setup lang="ts">
import { computed, defineProps } from 'vue'
import waweBefore from './wawe-before.png'

const props = defineProps<{ color: string, variant?: number }>()

const variant = computed(() => {
  if (props.variant) {
    return props.variant
  }
  return 1
})
</script>