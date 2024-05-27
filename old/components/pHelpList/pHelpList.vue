<template>
 <div class="p-help-list">
   <div class="p-help-list__container">
     <div class="p-help-list__wrapper">
       <div class="p-help-list__head">
         <div class="p-help-list__title">
           <h3>Помощь</h3> <span> в решении вопросов</span>
         </div>
       </div>
       <div class="p-help-list__row">
         <p-help-item :item="item" v-for="item in helpItems" :key="item.id"/>
       </div>
     </div>
   </div>
 </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import PHelpItem from "~/components/pSliderHelp/pHelpItem.vue";
const {data: items} = await useFetch('/api/get-help-items')
const helpItems = ref(items.value.data)
</script>
<style lang="scss">
@import "pHelpList";
</style>