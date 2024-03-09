<script setup>
const route = useRoute();
const { data } = await useAsyncData("projects", () =>
  queryContent(`projects/${route.params.slug[0]}`).findOne()
);
</script>
<template>
  <v-container class="articles-details" fluid>
    <v-row
      ><v-col
        cols="auto"
        class="font-weight-bold"
        :class="{
          'text-body-1': $vuetify.display.smAndDown,
          'text-h5': $vuetify.display.mdAndUp,
        }"
      >
        {{ data.title }}
      </v-col>
    </v-row>
    <v-row
      ><v-col cols="auto">
        <v-btn
          size="small"
          color="#a3bdae"
          :href="data.demoLink"
          target="_blank"
          class="white--text"
          rounded
          flat
        >
          Demo
        </v-btn></v-col
      >
    </v-row>
    <v-row
      ><v-col
        cols="auto"
        :class="{
          'text-caption': $vuetify.display.smAndDown,
          'text-body-1': $vuetify.display.mdAndUp,
        }"
        >{{ data.description }}
      </v-col>
    </v-row>
    <v-row
      ><v-col
        cols="auto"
        class="font-weight-bold"
        :class="{
          'text-body-1': $vuetify.display.smAndDown,
          'text-h6': $vuetify.display.mdAndUp,
        }"
        >Screenshots & Gifs
      </v-col>
    </v-row>
    <v-row
      ><v-col
        :cols="$vuetify.display.mdAndUp ? 4 : 12"
        v-for="image in data.images"
        :key="image"
      >
        <v-img :src="image" contain />
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.articles-details {
  font-family: "JetBrains Mono" !important;
}
</style>
