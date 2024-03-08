<template>
  <div>
    <v-container fluid>
      <v-row :class="{'mx-10':$vuetify.display.mdAndUp}" justify="center">
        <v-col v-for="article in articles" :key="article.title" :cols="$vuetify.display.mdAndUp?4: 12">
          <app-article-card
            :to="article._path"
            :url="''"
            :description="article.description"
            :title="article.title"
            :type="'article'"
          />
        </v-col>
      </v-row>
      <v-row  justify="center"  class="app-footer-wrapper" v-if="$vuetify.display.mdAndUp">
        <v-col cols="auto">
          <app-footer :back-url="'/'" :back-text="'Home'"/>
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
