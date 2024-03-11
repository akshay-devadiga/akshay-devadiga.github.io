<template>
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
    <v-row justify="start" no-gutters>
      <v-col
        class="pa-1"
        v-for="project in filteredProjects"
        :key="project.id"
        :cols="$vuetify.display.mdAndUp ? 4 : 12"
      >
        <app-project-card
          :to="project._path"
          :image-url="project.imageUrl"
          :title="project.title"
          :date="project.date"
          :type="project.type"
          :hasDemoLink="project.hasDemoLink"
        />
      </v-col>
    </v-row>
    <v-row
      justify="center"
      class="app-footer-wrapper"
      v-if="$vuetify.display.mdAndUp"
    >
      <v-col cols="auto">
        <app-footer :back-url="'/'" :back-text="'Home'" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const projects = await queryContent("/projects")
  .find();

const selectedTags = ref("");

const filteredProjects = computed(() => {
  let result = projects;
 if (selectedTags.value !== null && selectedTags.value.length > 0) {
    selectedTags.value.forEach(tag => {
      result = result.filter(project => {
        if (project.tags.length>0) {
          return project.tags.includes(tag);
        } else {
          return false;
        }
      });
    });
  }
  return result;
});
const allTags = [...new Set(projects.flatMap(project => project.tags))];
</script>

<style lang="scss" scoped></style>
