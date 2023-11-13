<template>
  <v-row align="center" justify="center">
     <app-sticky-progress-bar :progressValue="progressValue" />
    
     <v-col cols="auto">
      <v-card
        class="mx-auto"
        max-width="344"
        title="Icons"
        subtitle="prepend-icon and append-icon"
        prepend-icon="mdi-account"
        append-icon="mdi-check"
      >
        <v-card-text>  {{progressValue}} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col>
<!--
    <v-col cols="auto">
      <v-card
        class="mx-auto"
        max-width="344"
        title="Icons"
        subtitle="prepend and append"
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-account" color="primary"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon icon="mdi-check" color="success"></v-icon>
        </template>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col> -->
    <app-scrollama
            :debug="true"
            @step-enter="({ element }) => setCurrStep(element)"
            @step-progress="({ element }) => handleStepProgress(element)"
            class="main__scrollama"
        >
            <div class="step" v-for="i in steps" :data-step-no="i" :key="i">
                Step {{i}}
            </div>
        </app-scrollama>
    <v-col cols="auto">
      <v-card
        class="mx-auto"
        max-width="344"
        title="Avatars"
        subtitle="prepend-avatar and append-avatar"
        prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
        append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
      >
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col>

    <!-- <v-col cols="auto">
      <v-card
        class="mx-auto"
        max-width="344"
        title="Avatars"
        subtitle="prepend and append"
      >
        <template v-slot:prepend>
          <v-avatar color="blue-darken-2">
            <v-icon icon="mdi-alarm"></v-icon>
          </v-avatar>
        </template>
        <template v-slot:append>
          <v-avatar size="24">
            <v-img
              src="https://cdn.vuetifyjs.com/images/john.png"
              alt="John"
            ></v-img>
          </v-avatar>
        </template>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col> -->
  </v-row>
</template>
<script setup>
import {ref, computed} from "vue";
const currStep = ref(0);
const emit = defineEmits(['updateProgressbar'])
const steps = ref(12);
function setCurrStep(element){
 currStep.value = element.dataset.stepNo;
}
const progressValue = computed(()=> Math.round((Number(currStep.value)/steps.value)*100));
</script>   
<style lang="scss">

// additions and overrides of DOM elements vue-scrollama sets up
.main {
  display: flex;
  .main__graphic {
    flex: 1;
    height: 40vh;
    top: 10vh;
    position: sticky;
  }
  .main__scrollama {
    flex: 1;
  }
}

// your elements styles
.main__graphic {
  height: 40vh;
  margin: 0 3rem;
  border: 1px solid #ccc;
  background-color: #eee;
  font-size: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step {
  padding: 20vh 0;
  margin: 0 3rem;
  margin-bottom: 10vh;
  background-color: beige;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
