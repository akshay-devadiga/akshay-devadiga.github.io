<template>
  <v-container fill-height fluid class="mx-4 justify-start align-start">
    <v-row class="justify-center align-center">
      <v-col cols="6" class="py-2 text-center">
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
    <v-row class="justify-start align-start fill-height">
      <v-col cols="12">
      <v-container
        v-if="isLoading"
        fill-height
        fluid
        class="mx-0 justify-start align-start"
      >
        <v-row class="align-center justify-center">
          <v-col cols="3">
            <v-card class="mx-auto pa-5" flat>
              <v-img
                transition="scale-transition"
                origin="center center"
                src="/images/loading.svg"
                contain
                aspect-ratio="1"
              ></v-img>
              <v-card-text class="align-center justify-center">
                <p class="text-center">Loading...</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container
        v-else
        fill-height
        fluid
        class="mx-4 justify-start align-start"
      >
        <v-row   v-if="posts == 0" class="align-start justify-start">  
          <v-col cols="6" v-for="post in hashnodePosts" :key="post">
            <v-card
              class="mx-auto"
              max-width="344"
              outlined
              @click="goToPost(post.slug)"
            >
              <v-list-item three-line>
                <v-list-item-avatar tile size="80" color="secondary lighten-1"
                  ><v-icon color="primary lighten-1"
                    >mdi-book-open-outline</v-icon
                  ></v-list-item-avatar
                >
                <v-divider vertical class="my-3 py-3"></v-divider>
                <v-list-item-content class="px-4">
                  <div>{{ getHumanFormat(post.dateAdded) }}</div>
                  <p class="text-h6">
                    {{ post.title }}
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
          </v-col></v-row>
        
        <v-row v-else class="align-start justify-start">
           <v-col cols="6" v-for="favoriteArticle in favoriteArticles" :key="favoriteArticle">
            <v-card class="mx-auto" max-width="344" outlined  @click="goToArticle(favoriteArticle.postUrl)">
              <v-list-item three-line>
                <v-list-item-avatar tile size="80" color="secondary lighten-1"
                  >
                  <v-img :src="favoriteArticle.postThumbnail"/>
                  <v-icon color="primary lighten-1"
                    >mdi-book-open-outline</v-icon
                  ></v-list-item-avatar
                >
                <v-divider vertical class="my-3 py-3"></v-divider>
                <v-list-item-content class="px-4">
                  <div> {{getHumanFormat(favoriteArticle.dateAdded)}}</div>
                  <p class="text-h6">
                   {{favoriteArticle.title}}
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { getAllPostsFromHashNode } from "../helpers/hashnode";
import favoriteArticles from "../json/favoriteArticles.json";
import moment from "moment";
export default {
  components: {
    VuePerfectScrollbar,
  },
  async created() {
    this.isLoading = true;
    this.hashnodePosts = await getAllPostsFromHashNode();
    this.isLoading = false;
  },
  methods: {
    getHumanFormat(dateAdded) {
      return moment(dateAdded).format("ddd MMM DD YYYY");
    },
    goToPost(slug) {
      let url = `https://akshay-devadiga.hashnode.dev/${slug}`;
      window.open(url, "_blank").focus();
    },
    goToArticle(postUrl) {
      window.open(postUrl, "_blank").focus();
    },
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 160,
        suppressScrollX: true,
      },
      posts: 0,
      hashnodePosts: [],
      isLoading: false,
      favoriteArticles
    };
  },
};
</script>
