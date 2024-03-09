<template>
  <v-container fluid>
    <v-row justify="start" no-gutters>
      <v-col
        class="pa-1"
        v-for="project in projectsData"
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
const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
const projectsData = ref(projects);
</script>

<style lang="scss" scoped></style>
