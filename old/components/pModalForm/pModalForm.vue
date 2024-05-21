<template>
  <p-modal :class="'form'" @close="closeModal">
    <template #title>
      <h1>Запись на консультацию</h1>
      <p>Пожалуйста заполните анкету и запишитесь на консультацию. В ближайшее время, с вами свяжутся для уточнения запроса.</p>
    </template>
    <template #body>

      <UForm :schema="schema" :state="state" class="space-y-4 form" @submit="onSubmit">
        <UFormGroup required class="form-label name" label="Имя" name="name">
          <UInput :placeholder="'Ваше имя'" class="form-input" size="lg" v-model="state.name" />
        </UFormGroup>
        <UFormGroup required class="form-label surname" label="Фамилия" name="surname">
          <UInput :placeholder="'Ваша фамилия'" class="form-input" size="lg" v-model="state.surname" />
        </UFormGroup>
        <div class="date">
          <UFormGroup class="form-label day"  label="День" name="day">
            <p-select @value="setDate" :list="days"/>
<!--            <USelect class="form-select" size="lg" v-model="state.dob.day" :options="days" />-->
          </UFormGroup>

          <UFormGroup  сlass="form-label month" label="Месяц" name="month">
            <p-select @value="setMonth" :list="months"/>
<!--            <USelect class="form-select" size="lg" v-model="state.dob.month" :options="months" />-->
          </UFormGroup>

          <UFormGroup сlass="form-label year" label="Год" name="year">
            <p-select @value="setYear" :list="years"/>
<!--            <USelect class="form-select" size="lg" v-model="state.dob.year" :options="years" />-->
          </UFormGroup>
        </div>
        <UFormGroup class="form-label sport" label="Спорт" name="sport">
          <p-select @value="setSport" :list="sports"/>

<!--          <USelect class="form-select" size="lg" v-model="state.sport" :options="sports" />-->
        </UFormGroup>
        <UFormGroup class="form-label sport-rank" label="Разряд" name="sportRank">
          <p-select @value="setSportRank" :list="sportRanks"/>

<!--          <USelect class="form-select" size="lg" v-model="state.sportRank" :options="sportRanks" />-->
        </UFormGroup>
        <UFormGroup required class="form-label phone" label="Телефон" name="phone">
          <UInput :placeholder="'+7 (___)___-__-__'" class="form-input" size="lg" v-model="state.phone" />
        </UFormGroup>
        <UFormGroup class="form-label telegram" label="Телеграм" name="telegram">
          <UInput :placeholder="'@'" class="form-input" size="lg" v-model="state.telegram" />
        </UFormGroup>
        <UFormGroup class="form-label more-info" label="Информация" name="information">
          <UTextarea :placeholder="'Коротко о проблеме которая вас беспокоит'" class="form-textarea" size="lg" v-model="state.moreInfo"/>
        </UFormGroup>
        <UButton :class="'submit'" type="submit">
          Записаться »
        </UButton>
      </UForm>
    </template>
  </p-modal>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import { object, string, type InferType } from 'yup'
const emit = defineEmits(["close"]);

const schema = object({
  name: string().min(2,'Имя должно быть больше 2 символов').required('Required'),
  surname: string()
      .min(2, 'Фамилия должна быть больше 2 символов')
      .required('Required'),
  phone: string().min(11,'Должно быть минимум из 11 цифр').required('Required')
})
const currentYear = (new Date()).getFullYear();
const range = (start: number, stop:number, step :number) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

let years = range(currentYear, currentYear - 50, -1)
const days = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
const months = [1, 2, 3,4,5,6,7,8,9,10,11,12]
const sports = ["Футбол", "Баскетбол", "Хоккей", "Теннис", "Бокс", "Волейбол", "Гольф", "Бейсбол", "Бадминтон", "Плавание", "Гребля", "Бег", "Скалолазание", "Сноуборд", "Регби"];
const sportRanks = ['Мастер спорта', 'Кандидат в мастера спорта', '1 разряд', '2 разряд', '3 разряд', '4 разряд', '1 юношеский разряд', '2 юношеский разряд', '3 юношеский разряд'];
const month = ref(months[0])
const day = ref(days[0])
const year = ref(years[0])
const sport = ref(sports[0])
const sportRank = ref(sportRanks[0])
type Schema = InferType<typeof schema>

const state = reactive({
  name: '',
  surname: '',
  dob: {
    day: day.value,
    month: month.value,
    year:  year.value,
  },
  sport: sport.value,
  sportRank: sportRank.value,
  phone: '',
  telegram: '',
  moreInfo: ''
})

async function onSubmit (event: object) {
  // Do something with event.data
  console.log(event.data)
}
function closeModal() {
  emit("close");
}
const setDate = (elem) => {
  state.dob.day = elem
}
const setMonth = (elem) => {
  state.dob.month = elem
}
const setYear = (elem) => {
  state.dob.year = elem
}
const setSport = (elem) => {
  state.sport = elem
}
const setSportRank = (elem) => {
  state.sportRank = elem
}
</script>

<style lang="scss">
@import "pModalForm";
</style>