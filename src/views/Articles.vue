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
      <v-col cols="6" v-for="post in hashnodePosts" :key="post">
        <v-card class="mx-auto" max-width="344" outlined @click="goToPost(post.slug)">
          <v-list-item three-line>
            <v-list-item-avatar tile size="80" color="secondary lighten-1"
              ><v-icon color="primary lighten-1"
                >mdi-book-open-outline</v-icon
              ></v-list-item-avatar
            >
            <v-divider vertical class="my-3 py-3"></v-divider>
            <v-list-item-content class="px-4">
              <div>{{getHumanFormat(post.dateAdded)}}</div>
              <p class="text-h6">
                {{post.title}}
              </p>
                <v-img
                contain
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1592751328987/VzrtgcQNF.jpeg?auto=compress"
                aspect-ratio="1"
                max-width="60"
                height="20"
              ></v-img>
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
import {getAllPostsFromHashNode} from "../helpers/hashnode"
import moment from "moment";
  export default {
    components:{
      VuePerfectScrollbar
    },
    async created () {
      this.hashnodePosts = await getAllPostsFromHashNode();
    },
    methods: {
      getHumanFormat(dateAdded) {
          return moment(dateAdded).format('ddd MMM DD YYYY');
      },
      goToPost(slug){
          let url = `https://akshay-devadiga.hashnode.dev/${slug}`
          window.open(url, '_blank').focus();
      }
    },
     data() {
    return {
      settings: {
        maxScrollbarLength: 160,
        suppressScrollX:true
      },
      posts:0,
      hashnodePosts:[]
    }
  },
  }
</script>