<template>
  <div>
    <v-container fluid>
          <v-row :class="{'mx-10':$vuetify.display.mdAndUp}" justify="center">
        <v-col  :cols="$vuetify.display.mdAndUp?8: 12">
    <v-chip-group
        v-model="selectedTags"
        column
        multiple
        class=""
        selected-class="text-white-lighten-4 bg-green"
        color="#F2EFE1"
      >
        <v-chip
          filter
          size="small"
          :value="tag"
          v-for="tag in allTags"
          :key="tag"
        >
          {{tag}}
        </v-chip>
      </v-chip-group>
      </v-col>
      </v-row>
      <v-row :class="{'mx-10':$vuetify.display.mdAndUp}" justify="start">
        <v-col v-for="article in filteredArticles" :key="article.title" :cols="$vuetify.display.mdAndUp?4: 12">
          <app-article-card
            :to="article._path"
            :url="''"
            :description="article.description"
            :title="article.title"
            :type="'article'"
            :tags="article.tags"
            :reading-time="article.readingTime.text"
            :date="article.created_date"
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
import {ref} from "vue";
const articles = await queryContent("/articles")
  .sort({ date: -1 })
  .where({ _partial: false })
  .find();

const selectedTags = ref([]);

const filteredArticles = computed(() => {
  let result = articles;
 if (selectedTags.value !== null && selectedTags.value.length > 0) {
    selectedTags.value.forEach(tag => {
      result = result.filter(article => {
        if (article.tags.length>0) {
          return article.tags.includes(tag);
        } else {
          return false;
        }
      });
    });
  }
  return result;
});
const allTags = [...new Set(articles.flatMap(article => article.tags))];
</script>

<style lang="scss" scoped></style>
