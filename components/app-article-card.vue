<template>
  <v-card class="pa-1 article" @click="goToDetails">
    <v-container fluid class="article__container py-6">
      <v-row justify="space-between">
        <v-col cols="auto" class="py-0">
          <v-chip class="mb-2 article__container__chip" size="small"> {{tag}} </v-chip>
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
          <h4>{{ title }}</h4>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" class="pb-0 pt-1">
          <p class="text-body-2">{{ description }}</p>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" class="pb-0 pt-1">
          <p class="text-caption">April 9,2021 · 1 minute</p>
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
import { computed } from "vue";

const props = defineProps({
  url: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "blog",
  },
  to: {
    type: String,
    default: "blog",
  },
  tag: {
    type: String,
    default: "",
  },
});
const isBlog = computed(() => props.type === "blog");
function goToDetails() {
  navigateTo(props.to);
}
</script>
<style lang="scss" scoped>
.article {
  border: 0.5px solid #a3bdae;
  border-radius: 12px;
   &__container{
      border-radius: 8px;
      background: #F3F2F2;
 &__chip {
    border-radius: 12px;
    border: 3px solid #a3bdae;
    background: #a3bdae;
    color: #ffff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    text-transform: uppercase;
  }
   }
 
}
</style>
