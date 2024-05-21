<script setup lang="ts">
import {withDefaults} from 'vue'
interface Props {
  value: string | number;
}
const emit = defineEmits(['value'])
const props = withDefaults( defineProps<Props>(), { value: 'aaa' });
const click = () => {
  emit('value', props.value)
}
</script>

<template>
<div class="p-select-item" @click="click">
  {{value}}
</div>
</template>

<style scoped lang="scss">

</style>