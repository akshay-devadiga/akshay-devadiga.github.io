<template>
  <div>
    <v-container fluid>
      <v-row :class="{ 'mx-10': $vuetify.display.mdAndUp }" justify="center">
        <v-col
          v-for="(labItem, index) in labData"
          :key="labItem.title"
          :cols="$vuetify.display.mdAndUp ? 8 : 12"
        >
          <v-card color="#a3bdae" class="mx-auto lab-item">
            <v-card-item>
              <div>
                <div class="d-flex flex-wrap justify-space-between">
                  <div
                    class="mb-1"
                    :class="{
                      'text-body': $vuetify.display.smAndDown,
                      'text-h5': $vuetify.display.mdAndUp,
                    }"
                  >
                    {{ labItem.title }}
                  </div>
                  <div
                    class="mb-1"
                    :class="{
                      'text-body': $vuetify.display.smAndDown,
                      'text-h4': $vuetify.display.mdAndUp,
                    }"
                  >
                    #{{ index + 1 }}
                  </div>
                </div>
                <div
                  class="mb-8"
                  :class="{
                    'text-caption': $vuetify.display.smAndDown,
                    'text-body': $vuetify.display.mdAndUp,
                  }"
                >
                  {{ labItem.description }}
                </div>
                <iframe
                  height="500"
                  style="width: 100%"
                  scrolling="no"
                  :title="labItem.title"
                  :src="`https://codepen.io/ad121/embed/${labItem.embedCode}?default-tab=html%2Cresult`"
                  frameborder="no"
                  loading="lazy"
                  allowtransparency="true"
                  allowfullscreen="true"
                ></iframe>
              </div>
            </v-card-item>
          </v-card>
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
  </div>
</template>

<script setup>
import { ref } from "vue";
const { data: lab } = await useAsyncData("lab-all", () =>
  queryContent("/lab").find()
);
const labData = ref(lab);
</script>

<style lang="scss" scoped>
.lab-item {
  border-radius: 24px;
  padding: 1rem;
  font-family: "Poppins";
}
</style>
