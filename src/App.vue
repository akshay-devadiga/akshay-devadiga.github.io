<template>
  <v-app class="pa-0">
    <v-card  class="pa-0" min-width="100%">
      <v-layout full-height>
      <v-navigation-drawer permanent color="#62ADF4">
      
        <sidebar />
      </v-navigation-drawer>
      <v-main >
        <v-container class="fill-height" fluid>
          <v-row>
          <v-col cols="12">
              <v-row class="justify-center align-center fill-height">
                <v-col cols="12" class="fill-height">
                  <AboutView style="width:90vw" />
                </v-col>
              </v-row> </v-col
          ></v-row>
        </v-container>
      </v-main>
          </v-layout>
           </v-card>
  </v-app>
</template>
<script>
import AboutView from './views/AboutView.vue'
import sidebar from './components/sidebar.vue'

export default {
  components: { AboutView, sidebar }
}
</script>
<style>
#app{
  margin: 0px !important;
  padding: 0px !important;
}
</style>