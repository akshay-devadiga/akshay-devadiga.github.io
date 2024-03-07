<template>
  <v-layout>
    <v-container class="app-layout" fluid>
      <v-row justify="center" class="mb-5" v-if="$vuetify.display.mdAndUp">
        <v-col cols="auto">
          <app-header />
        </v-col>
      </v-row>
      <v-row>
        <v-main class="align-center justify-center">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-card flat color="transparent" class="app-content">
                  <slot />
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-row>
      <row v-if="$vuetify.display.smAndDown">
        <app-navigation />
      </row>
    </v-container>
  </v-layout>
</template>
<style scoped>
.app-layout {
  background-image: linear-gradient(#a3bdae, #3185FC);
}
.app-content {
  background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
  background-color: transparent;
  background-image: linear-gradient(
      0deg,
      transparent 9%,
      rgba(255, 255, 255, 0.2) 10%,
      rgba(255, 255, 255, 0.2) 12%,
      transparent 13%,
      transparent 29%
    ),
    linear-gradient(
      90deg,
      transparent 9%,
      rgba(255, 255, 255, 0.2) 10%,
      rgba(255, 255, 255, 0.2) 12%,
      transparent 13%,
      transparent 29%
    );
  background-size: 50px 50px;
}
.default::before {
  position: absolute;
  top: 2px;
  left: 5px;
  color: #68b538;
  font-family: monospace;
}
</style>
