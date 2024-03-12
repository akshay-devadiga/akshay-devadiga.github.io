<template>
  <v-card class="project" height="300" flat>
    <v-img
      :src="imageUrl"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="100%"
      cover
    >
      <v-card color="transparent" class="project__others-container">
        <div class="project__others-container__header">
          <v-container fluid>
            <v-row justify="end">
              <v-col cols="auto" class="text-white">
                <v-chip
                  class="mb-2 project__others-container__chip px-4 py-1"
                  size="small"
                >
                  {{ type }}
                </v-chip>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="project__others-container__spacer" />
        <v-spacer />
        <div class="project__others-container__footer">
          <v-container fluid>
            <v-row justify="space-between" align="center">
              <v-col cols="auto" class="text-white">{{ title }} </v-col>
              <v-col cols="auto"
                ><v-btn
                  size="small"
                  class=" text-caption text-uppercase font-weight-bold"
                  rounded
                    @click="goToDetails"
                >
                  Check details
                </v-btn>
              </v-col>
               <v-col cols="auto"
                v-if="hasDemoLink"
                ><v-btn
                  block
                  size="small"
                  class="text-overline font-weight-bold"
                  rounded
                  :href="demoLink"
                  target="_blank"
                >
                  Demo
                </v-btn>
              </v-col></v-row
            >
          </v-container>
        </div>
      </v-card>
    </v-img>
  </v-card>
</template>
<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  imageUrl: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    default: "blog",
  },
  type: {
    type: String,
    default: "",
  },
  demoLink: {
    type: String,
    default: "/projects",
  },
  hasDemoLink:{
    type:Boolean,
    default: false
  }
});
// type === 'Prototype'
const isPrototype = computed(() => props.type === "Prototype");
function goToDetails() {
  navigateTo(props.to);
}
</script>
<style lang="scss" scoped>
.project {
  border-radius: 12px;
  cursor: pointer;
  &__others-container {
    &__chip {
      border-radius: 12px;
      border: 0.1px solid #ffff;
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
      background: #a3bdae;
      color: #ffff;
      font-family: 'Poppins';
      font-size: 12px;
      padding: 0.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 19px;
      text-transform: uppercase;
    }
    &__header {
      height: 50px;
      background: transparent;
    }
    &__spacer {
      height: 200px;
    }
    &__footer {
      height: 50px;
    }
  }
}
</style>
