<template>
  <p-main-banner :item="welcomeConfig"/>
  <p-slider-news/>
  <p-main-banner :item="servicesConfig"/>
  <p-slider-help @open-modal="openModal"/>
  <p-main-banner :item="formConfig"/>
</template>
<script setup lang="ts">
import {ref} from 'vue';
const emit = defineEmits(["open-modal"]);
const servicesConfig = ref( {
  type: 'services',
  src: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
  info: {
    title: 'Услуги спортивного психолога',
    subtitle: 'Услуги спортивного психолога',
    content: '<p>Обращаю ваше внимание, что на первой консультации обязательно присутствие родителя спортсмена для оформления документов</p><p>Задать уточняющие вопросы относительно условий консультирования можно в личном сообщении в социальных сетях, написав мне сообщение, а также по телефону: <a src="tel:+79610261213">+7(961) 026-12-13</a> в рабочее время</p>'
  },
  list: [
    {text: '<p>Девочки/Мальчики 7-10 лет группы начальной подготовки (НП) спортивно-оздоровительные (СОШ) 1юн, 2юн, 3юн</p><span>Консультация 60мин. - 1200 рю</span>'},
    {text: '<p>Девочки/>Юноши 11-14 лет учебно-тренировочные группы (УТГ) 2вз, 3вз </p><span>Консультация 1ч 15мин. - 1500 р</span>'},
    {text: '<p>Девочки/>Юноши 15-17 лет группы спортивного совершенствования (СС) 1вз, КМС, МС, МСМК </p><span>Консультация 1ч 30мин. - 2000 р</span>'},
    {text: '<p>Родители спортсменов</p><span>Консультация 50мин. - 1000 р</span>'},

  ]
})
const formConfig = ref( {
  type: 'form',
  src: 'https://assets.volkswagen.com/is/image/volkswagenag/VW_NGW6_Showroom_Arteon_Performance_Imagery_DrivingHandling-2?Zml0PWNyb3AlMkMxJndpZD04MDAmaGVpPTQ1MCZmbXQ9anBlZyZxbHQ9NzkmYmZjPW9mZiZiYTQz',
  info: {
    title: 'Запись',
    subtitle: 'Заполните небольшую анкету и запишитесь на консультацию'
  }
})
const welcomeConfig = ref({
  src: 'https://shina26.ru/wp-content/uploads/6/8/7/687da4d9770eda7de2f097a9ce8dd690.jpeg',
  type: 'welcome',
  info: {
    title: 'Спортивный психолог',
    description: 'выаыв'
  }
})
const openModal = (item) => {
  emit('open-modal', item)
}
</script>