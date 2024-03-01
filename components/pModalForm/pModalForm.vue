<template>
  <p-modal>
    <template #body>
     <FormulateForm v-model="formValues">
       <FormulateInput name="name" label="Имя"/>
       <FormulateInput name="surname" label="Фамилия"/>
     </FormulateForm>
    </template>
  </p-modal>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const formValues = ref({
  name: '',
  surname: ''
})
</script>

<style scoped lang="scss">

</style>