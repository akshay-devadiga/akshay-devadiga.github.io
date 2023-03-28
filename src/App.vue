<template>
  <v-app class="pa-0">
    <v-card class="pa-0" min-width="100%">
      <v-layout full-height>
        <v-navigation-drawer permanent color="#62ADF4" v-if="$vuetify.display.mdAndUp">
          <sidebar />
        </v-navigation-drawer>
        <navbar v-else />
        <v-main>
          <v-container class="fill-height" fluid>
            <v-row>
              <v-col cols="12">
                <v-row class="justify-center align-center">
                  <v-col cols="12">
                    <AboutView style="width: 90vw" />
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
import navbar from './components/navbar.vue'
export default {
  components: { AboutView, sidebar, navbar }
}
</script>
<style>
#app {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
