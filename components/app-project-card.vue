<template>
  <v-card class="project" height="300" v-if="isPrototype" flat>
    <v-img
      :src="imageUrl"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="250px"
      cover
    >
      <v-card color="transparent" class="project__prototype-container" flat>
        <div class="project__prototype-container__header">
          <v-container fluid>
            <v-row justify="end">
              <v-col cols="auto" class="text-white">
                <v-chip
                  class="mb-2 project__prototype-container__chip"
                  size="small"
                >
                  {{ type }}
                </v-chip>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="project__prototype-container__spacer"></div>
        <v-spacer />
        <div class="project__prototype-container__footer">
          <v-container fluid>
            <v-row justify="space-between">
              <v-col cols="auto" class="text-white">{{ title }} </v-col>
              <v-col cols="auto" class="text-white">{{ date }} </v-col></v-row
            >
          </v-container>
        </div>
      </v-card>
    </v-img>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat>
        <template v-slot:prepend>
          <v-avatar color="transparent" rounded="0">
            <v-img
              src="images/about/view.svg"
              :height="20"
              contain
              alt="view"
              class="px-0"
            ></v-img>
          </v-avatar>
        </template>
        <div>View</div>
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
  <v-card class="project" height="300" v-else flat>
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
                  class="mb-2 project__others-container__chip"
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
            <v-row justify="space-between">
              <v-col cols="auto" class="text-white">{{ title }} </v-col>
              <v-col cols="auto" class="text-white">{{ date }} </v-col></v-row
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
  type: {
    type: String,
    default: "",
  },
});
// type === 'Prototype'
const isPrototype = computed(()=>props.type==='Prototype')
</script>
<style lang="scss" scoped>
.project {
  border-radius: 12px;

  &__prototype-container {
    &__chip {
      border-radius: 12px;
      border: 3px solid #000;
      background: #91d5ff;
      color: #000;
      font-family: Inter;
      font-size: 13px;
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
      height: 150px;
    }
    &__footer {
      height: 50px;
    }
  }
  &__others-container {
    &__chip {
      border-radius: 12px;
      border: 3px solid #000;
      background: #91d5ff;
      color: #000;
      font-family: Inter;
      font-size: 13px;
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
