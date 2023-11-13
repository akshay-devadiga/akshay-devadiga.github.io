<template>
  <v-layout>
    <app-header />
    <v-main class="align-center justify-center flex-1-1-100 app-content">
      <v-container class="pa-0" fluid>
        <v-row>
          <v-col cols="12">
            <v-card flat class="pa-0"> <slot /></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
.app-content {
  background-color: #f5f5f5;
}
.default::before {
  position: absolute;
  top: 2px;
  left: 5px;
  color: #68b538;
  font-family: monospace;
}
</style>
