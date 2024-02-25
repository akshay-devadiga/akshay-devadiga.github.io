<template>
  <v-layout>
    <v-container class="app-content" fluid>
      <!-- <v-row v-if="$vuetify.display.mdAndUp">
        <app-header/>
      </v-row> -->
      <v-row>
        <v-main class="align-center justify-center app-content">
          <v-container fluid class="app-content" >
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-card flat class="app-content" >
                  <slot
                />      
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-row>
      <row  v-if="$vuetify.display.smAndDown"> 
     <app-navigation/>
      </row>
    </v-container>
  </v-layout>
</template>\
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
