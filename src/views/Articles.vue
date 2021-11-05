<template>
  <v-container class="mx-4">
    <v-row class="justify-center align-center">
      <v-col cols="6" class="py-2">
        <v-btn-toggle v-model="posts">
          <v-btn>
            My posts
          </v-btn>

          <v-btn>
            My Favorites
          </v-btn>

        </v-btn-toggle>
      </v-col>
    </v-row>
     <VuePerfectScrollbar class="mt-2" :style="`max-height: ${$vuetify.breakpoint.height-$vuetify.breakpoint.height*0.16}px !important`" :settings="settings">
    <v-row v-if="posts==0">
      <v-col cols="6" v-for="i in 10" :key="i">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-avatar tile size="80" color="secondary lighten-1"
              ><v-icon color="primary lighten-1"
                >mdi-book-open-outline</v-icon
              ></v-list-item-avatar
            >
            <v-divider vertical class="my-3 py-3"></v-divider>
            <v-list-item-content class="px-4">
              <div>Sat Jun 19 2021</div>
              <p class="text-h6">
                How to create vuex modules
              </p>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else> 
            <v-col cols="6" v-for="i in 2" :key="i">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-avatar tile size="80" color="secondary lighten-1"
              ><v-icon color="primary lighten-1"
                >mdi-book-open-outline</v-icon
              ></v-list-item-avatar
            >
            <v-divider vertical class="my-3 py-3"></v-divider>
            <v-list-item-content class="px-4">
              <div>Sat Jun 19 2021</div>
              <p class="text-h6">
                How to create vuex modules
              </p>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    </VuePerfectScrollbar>
  </v-container>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  export default {
    components:{
      VuePerfectScrollbar
    },
     data() {
    return {
      settings: {
        maxScrollbarLength: 160,
        suppressScrollX:true
      },
      posts:0
    }
  },
  }
</script>