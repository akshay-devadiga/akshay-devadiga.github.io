<template>
  <v-app-bar flat>
    <v-container fluid class="pa-0 mt-8">
      <v-row align="center">
        <v-col cols="12">
          <v-progress-linear
            :model-value="progressValue"
            color="#91d5ff"
            height="10"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script setup>
defineProps({
  progressValue:{
    default:0
  }
})
</script>

<style lang="scss" scoped></style>
