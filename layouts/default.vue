<template>
  <v-layout>
    <v-container :class="pageClass" fluid full-height>
      <v-row justify="center" class="mb-5" v-if="$vuetify.display.mdAndUp">
        <v-col cols="auto">
          <app-header />
        </v-col>
      </v-row>
      <v-row>
        <v-main class="align-center justify-center">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-card flat color="transparent" :class="pageClassContent">
                  <slot />
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-row>
      <row v-if="$vuetify.display.smAndDown">
        <app-navigation />
      </row>
    </v-container>
  </v-layout>
</template>
<script setup>
import { useRoute } from 'vue-router';
import {computed} from "vue";
const route = useRoute();
const pageClass = computed(() => {
  return {
    'app-layout__home-page': route.path === '/',
    'app-layout': route.path != '/'
  };
});
const pageClassContent = computed(() => {
  return {
    'app-content__home-page': route.path === '/',
    'app-content': route.path != '/'
  };
});
</script>
<style lang="scss" scoped>
.app-layout {
   min-height: 100vh;
  &__home-page{
    background-image: linear-gradient(#a3bdae, #3185FC);
  }
}
.app-content {
  min-height: 100vh;
  background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
  background-color: transparent;
  background-image: linear-gradient(
      0deg,
      transparent 9%,
      rgba(49, 133, 252, 0.08) 10%,
      rgba(49, 133, 252, 0.08) 12%,
      transparent 3%,
      transparent 80%
    ),
    linear-gradient(
      90deg,
      transparent 9%,
      rgba(49, 133, 252, 0.08) 10%,
      rgba(49, 133, 252, 0.08) 12%,
      transparent 3%,
      transparent 80%
    );
  background-size: 50px 50px;
  &__home-page{
background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
  background-color: transparent;
  background-image: linear-gradient(
      0deg,
      transparent 9%,
      rgba(255, 255, 255, 0.08) 10%,
      rgba(255, 255, 255, 0.08) 12%,
      transparent 3%,
      transparent 80%
    ),
    linear-gradient(
      90deg,
      transparent 9%,
      rgba(255, 255, 255, 0.08) 10%,
      rgba(255, 255, 255, 0.08) 12%,
      transparent 3%,
      transparent 80%
    );
  background-size: 50px 50px;
  }
  
}
.default::before {
  position: absolute;
  top: 2px;
  left: 5px;
  color: #68b538;
  font-family: monospace;
}
</style>
