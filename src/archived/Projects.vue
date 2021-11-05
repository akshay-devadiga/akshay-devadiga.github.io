<template>
  <v-container fill-height style="width:80vw">
    <v-row
      ><v-col cols="12" class="ma-0 pa-0">
        <span class="font-weight-bold"
          >Software Dev [Adding project list shortly] - WIP
        </span>
        <v-card max-width="800" flat>
          <v-container>
            <v-row class="d-flex flex-no-wrap align-center justify-start">
              <v-col
                class="d-flex flex-no-wrap align-center justify-center"
                v-for="(item, i) in recentWorks"
                :key="i"
                cols="3"
              >
                <v-card
                  :color="item.color"
                  dark
                  class="pointer-cursor d-flex flex-no-wrap align-center justify-center"
                  @click="goToUrl(item.imageLink)"
                >
                  <v-avatar class="ma-2" size="125" tile>
                    <v-img :src="item.src">
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-avatar>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card> </v-col
    ></v-row>
    <v-row
      ><v-col cols="12" class="ma-0 pa-0">
        <span class="font-weight-bold"> Graphic Design </span>
        <v-card max-width="800" flat>
          <v-container>
            <v-row class="d-flex flex-no-wrap align-center  justify-start">
              <v-col
                class="d-flex flex-no-wrap align-center justify-center"
                v-for="(item, i) in graphicDesign"
                :key="i"
                cols="3"
              >
                <v-card
                  :color="item.color"
                  dark
                  class="pointer-cursor d-flex flex-no-wrap align-center justify-center"
                  @click="goToUrl(item.imageLink)"
                >
                  <v-avatar class="ma-2" size="125" tile>
                    <v-img :src="item.src">
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-avatar>
                </v-card>
              </v-col>
            </v-row>
          </v-container> </v-card></v-col
    ></v-row>
    <v-row
      ><v-col cols="12" class="ma-0 pa-0">
        <span class="font-weight-bold"> Video Editing </span>
        <v-card flat max-width="700">
          <v-container>
            <v-row class="d-flex flex-no-wrap align-center justify-start">
              <v-col
                class="d-flex flex-no-wrap align-center justify-center"
                v-for="(item, i) in recentEdits"
                :key="i"
                cols="3"
              >
                <v-card
                  :color="item.color"
                  dark
                  class="pointer-cursor d-flex flex-no-wrap align-center justify-center"
                >
                  <v-avatar class="ma-2" size="125" tile>
                    <div v-html="item.iframe" />
                  </v-avatar>
                </v-card>
              </v-col>
            </v-row>
          </v-container> </v-card></v-col
    ></v-row>
    <!-- <v-row><v-col cols="12"> Technical Writing </v-col></v-row> -->
  </v-container>
</template>

<script>
import * as animationData from "../assets/wip.json";
export default {
  data: () => ({
    isReachOut: false,
    expand: false,
    defaultOptions: { animationData: animationData.default },
    recentWorks: [
      {
        color: "white",
        src:
          "https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png",
        imageLink: "https://codepen.io/collection/eJJzWO",
      },
      {
        color: "white",
        src:
          "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codesandbox-512.png",
        imageLink: "https://codesandbox.io/u/akshayd21",
      },
      {
        color: "white",
        src:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        imageLink: "https://github.com/akshay-devadiga",
      },
    ],
    graphicDesign: [
      {
        color: "#D8D3C6",
        src: "https://drive.google.com/uc?id=1XUA_muH0d9VD5k5muN_LzWuCJgI_RIMw",
        imageLink:
          "https://drive.google.com/file/d/1XUA_muH0d9VD5k5muN_LzWuCJgI_RIMw/view",
      },
      {
        color: "#332050",
        src: "https://drive.google.com/uc?id=1bNGKxzaK5AcEW2v1qqqm6Y8wO89LS-d9",
        imageLink:
          "https://drive.google.com/file/d/1bNGKxzaK5AcEW2v1qqqm6Y8wO89LS-d9/view",
      },
    ],
    recentEdits: [
      {
        color: "#0D1210",
        iframe:
          '<iframe width="125" height="125" src="https://www.youtube.com/embed/pUoIfB4yEfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
    ],
  }),
};
</script>

<style></style>
