<template>
<a href="/">{{ id }}</a>
</template>
<script setup lang="ts">
const { id } = useRoute().params

const { data: item } = await useFetch(`/api/news/`, {
  query: {
    id: id
  }
})
console.log(item.value)
</script>
<style scoped lang="scss">

</style>