<script setup>
const route = useRoute()
const { data } = await useAsyncData('blog', () => queryContent(`blog/${route.params.slug[0]}`).findOne())
</script>
<template>
<div> 
  <ContentRenderer :value="data" />
  </div>
</template>