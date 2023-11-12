<template>
    <v-row justify="space-around">
            <v-col
              v-for="option in options"
              :key="option"
              class="d-flex child-flex px-8 mx-7"
              cols="3"
            >
              <v-img
                :src="option.src"
                :lazy-src="option.src"
                contain
                style="cursor: pointer"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey-lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
</template>

<script setup>
import { ref } from "vue";

const options = ref([
  { id: 1, src: "options/option-1.svg" },
  { id: 2, src: "/options/option-2.svg" },
  { id: 3, src: "/options/option-3.svg" },
  { id: 4, src: "/options/option-4.svg" },
  { id: 5, src: "/options/option-5.svg" },
]);
</script>
<style lang="scss" scoped>

</style>