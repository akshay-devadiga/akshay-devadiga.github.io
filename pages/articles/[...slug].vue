<script setup>
const route = useRoute()
const { data } = await useAsyncData('article', () => queryContent(`articles/${route.params.slug[0]}`).findOne())
</script>
<template>
<div> 
  <ContentRenderer :value="data" />
  </div>
</template>