<template>
    <div class="datapicker">
      <VCalendarDatePicker v-model="date" v-bind="{ ...attrs, ...$attrs }" />
    </div>
</template>

<script setup lang="ts">
  import { DatePicker as VCalendarDatePicker } from 'v-calendar'
  import type { DatePickerDate, DatePickerRangeObject } from 'v-calendar/dist/types/src/use/datePicker'
  import { type PropType, computed } from 'vue'
  import 'v-calendar/dist/style.css'
  import './DatePicker.scss'

  const props = defineProps({
    modelValue: {
      type: [Date, Object] as PropType<DatePickerDate | DatePickerRangeObject | null>,
      default: null
    }
  })

  const emit = defineEmits(['update:model-value', 'close'])

  const date = computed({
    get: () => props.modelValue,
    set: (value) => {
      emit('update:model-value', value)
      emit('close')
    }
  })

  const attrs = {
    transparent: true,
    borderless: true,
    color: 'primary',
    'is-dark': { selector: 'html', darkClass: 'dark' },
    'first-day-of-week': 2,
  }
</script>
