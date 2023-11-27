<template>
  <div>
    <v-container fluid>
      <v-row class="mx-10" justify="center">
        <v-col
          v-for="article in articles"
          :key="article.title"
          :cols="4"
        >
        {{article}}
          <app-article-card :to="article._path" :url="''" :title="article.title" :type="'article'" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const articles = await queryContent("/articles")
  .sort({ date: -1 })
  .where({ _partial: false })
  .find();
</script>

<style lang="scss" scoped></style>
