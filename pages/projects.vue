<template>
  <div>
    <v-container fluid>
      <v-row class="mx-10" justify="center">
        <v-col
          v-for="project in projectList"
          :key="project.id"
          :cols="4"
        >
           <app-project-card :image-url="project.imageUrl" :title="project.title" :date="project.date" :type="project.type"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import {ref} from "vue";
const projects = await queryContent("/projects")
  .findOne();
const projectList = ref(projects.body);
</script>

<style lang="scss" scoped></style>
