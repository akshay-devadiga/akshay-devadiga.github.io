<template>
  <v-card class="pa-4">
    <v-container fluid>
      <v-row justify="space-between">
        <v-col cols="auto" class="py-0">
          <v-chip class="mb-2 about__content__under-deck__chip" size="small">
            Dev
          </v-chip>
        </v-col>
        <v-col cols="auto" class="py-0">
          <v-avatar size="20" rounded="0">
            <v-img v-if="isBlog" src="images/blog.svg" contain />
             <v-img v-else src="images/article.svg" contain />
          </v-avatar>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" class="py-0">
          <h4>Software architecture in under a minute</h4>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" class="pb-0 pt-1">
          <p class="text-body-2">{{ title }}</p>
        </v-col>
      </v-row>
        <v-row align="center">
        <v-col cols="12" class="pb-0 pt-1">
          <p class="text-caption">April 9,2021 · 1 minute  </p>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-sheet class="pa-2">
      <v-container class="bg-grey-lighten-2" fluid>
        <v-row align="center">
          <v-col cols="1">
            <v-avatar size="20">
              <v-img src="images/about/info.svg" contain />
            </v-avatar>
          </v-col>
          <v-col cols="11">
            <p class="text-caption">{{ title }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet> -->
  </v-card>
</template>
<script setup>
import {computed} from "vue"

const props = defineProps({
  url: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "blog",
  },
});
const isBlog = computed(()=>props.type==='blog')
</script>
