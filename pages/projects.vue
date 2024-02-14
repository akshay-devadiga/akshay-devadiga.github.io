<template>
    <v-container fluid>
      <v-row justify="center">
        <v-col v-for="project in projectsData" :key="project.id" :cols="project.col">
          <app-project-card
            :image-url="project.imageUrl"
            :title="project.title"
            :date="project.date"
            :type="project.type"
          />
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
