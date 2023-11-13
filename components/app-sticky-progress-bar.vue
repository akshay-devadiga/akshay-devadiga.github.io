<template>
    <v-container fluid class="pa-0 mt-8">
      <v-row align="center">
        <v-col cols="12">
         <v-divider inset/>
          <v-progress-linear
            :model-value="progressValue"
            color="#91d5ff"
            height="10"
          ></v-progress-linear>
           <v-divider inset/>
        </v-col>
      </v-row>
    </v-container>
</template>
<script setup>
defineProps({
  progressValue:{
    default:0
  }
})
</script>

<style lang="scss" scoped></style>
