<script setup>
const route = useRoute();
const { data } = await useAsyncData("article", () =>
  queryContent(`articles/${route.params.slug[0]}`).findOne()
);
</script>
<template>
  <v-container class="articles-details" fluid>
    <v-row><v-col> <ContentRenderer :value="data" /> </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.articles-details{
    font-family: 'JetBrains Mono' !important;
}
 </style>