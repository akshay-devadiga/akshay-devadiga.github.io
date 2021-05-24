<template>
     <v-container style="width:80vw">
        
         <v-row><v-col cols="12"> <lottie
              :options="defaultOptions"
              :height="200"
              :width="300"
              v-on:animCreated="handleAnimation"
            /></v-col></v-row>
             <v-row><v-col cols="12" class="text-center">/Experience - WIP</v-col></v-row>
     </v-container>
</template>

<script>
import * as animationData from "../assets/wip.json";
export default {
  data: () => ({
    isReachOut:false,
    expand: false,
    defaultOptions: { animationData: animationData.default },
  })
}
</script>

<style>

</style>