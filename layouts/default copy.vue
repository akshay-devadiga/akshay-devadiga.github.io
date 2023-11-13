<template>
  <v-layout>
    <v-main class="align-center justify-center flex-1-1-100">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
           <app-header />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card> <slot /></v-card>
          </v-col>
          <v-col cols="12">
            <v-card> <app-footer /></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
.default {
  border: 1px solid #b9e39e;
  padding: 1rem;
  position: relative;
  background-color: #b8e39e87;
}
.default::before {
  position: absolute;
  top: 2px;
  left: 5px;
  color: #68b538;
  font-family: monospace;
}
</style>
