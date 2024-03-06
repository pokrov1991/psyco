<template>
  <header>
    <div class="p-header">
      <div class="p-header__container">
        <div class="p-header__wrap">
          <div class="p-header__info">
            <p-header-item :class="'p-header__info-item'" v-for="(item, index) in headerInfo" :item="item" :key="index"/>
          </div>
          <div class="p-header__list">
            <p-header-item :class="'p-header__list-item'" v-for="(item, index) in headerList" :item="item" :key="index + 5"/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref, defineEmits} from 'vue';

const headerInfo = ref([{text: 'г.Ярославль, Лисицына 2В', src:'https://yandex.ru/maps/-/CDu9m2Yi'}, {text: `<span>+7(901)485 44-29</span><span>Запись на консультацию</span>`, src: 'tel:+79014854429'}])
const headerList = ref([{text: 'услуги', src:'/services'}, {text: 'о себе', src: '/about'},{text: 'контакты', src: '/contacts'},{text: 'Запись'}])

//Methods
</script>

<style lang="scss">
@import "pHeader.scss";
</style>