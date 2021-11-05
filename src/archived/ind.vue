<template>
  <v-app id="inspire">
    <v-main
      :style="{
        background: isArrowButtonClicked
          ? 'white'
          : $vuetify.theme.defaults.light.secondary,
      }"
    >
      <v-content>
        <v-container fluid class="full-height" style="max-width:100%">
        
          <v-row class="fill-height"
            ><v-col
              cols="4"
              :style="{ background: $vuetify.theme.defaults.light.secondary }"
            >
              <v-row class="justify-center">
                <v-col cols="12">
                  <v-btn color="white" class=" grow mx-2 grey--text">
                    <v-icon left dark color="secondary" style="font-size:27px">
                      work
                    </v-icon>
                    <span class="ml-2">Experience </span>
                  </v-btn>
                </v-col>
                 <v-col cols="12">
                 <v-btn color="white" class="mx-2 grey--text">
                    <v-icon left dark color="secondary" style="font-size:27px">
                      <!--folder-->
                      science
                    </v-icon>
                    <span class="ml-2">Projects </span>
                  </v-btn>
                </v-col>
                     <v-col cols="12">
                  <v-btn color="white" class="mx-2 grey--text">
                    <v-icon left dark color="secondary" style="font-size:27px">
                      art_track
                    </v-icon>
                    <span class="ml-2">Articles </span>
                  </v-btn>
                </v-col>
                 <v-col cols="12">
                  <v-btn color="white" class="mx-2 white--text" outlined>
                    <v-icon left dark color="white" style="font-size:27px">
                      download
                    </v-icon>
                    <span class="ml-2">Resume </span>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row class="justify-center">
                <v-col cols="3" class="justify-center align-center">
                  <v-row class="justify-center align-center">
                    <v-col cols="12"
                      ><v-btn small icon color="white">
                        <v-icon large>mdi-linkedin</v-icon>
                      </v-btn></v-col
                    >
                    <v-col cols="12"
                      ><v-btn small icon color="white">
                        <v-icon large>mdi-github</v-icon>
                      </v-btn></v-col
                    >
                    <v-col cols="12"
                      ><v-btn small icon color="white" class="mx-100">
                        <v-icon>mdi-whatsapp</v-icon>
                      </v-btn></v-col
                    >
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-img
                    src="/images/undraw_developer.svg"
                    contain
                    aspect-ratio="1"
                  ></v-img>
                </v-col>
              </v-row>
              <!-- <lottie
                :options="defaultOptions"
                :height="200"
                :width="300"
                v-on:animCreated="handleAnimation"
              />  --> </v-col
            ><v-col cols="8" class="">
              <v-row>
                <v-col cols="4" v-for="i in 3" :key="i">
                      <v-card
                :loading="loading"
                class="mx-auto my-12 round-radius"
                max-width="374"
              >
                <v-container>
                  <v-row justify="space-around">
                    <v-col cols="12">
                      <v-sheet class="pa-12" color="primary lighten-1">
                        <div></div>
                        <v-sheet
                          rounded="xl"
                          class="mx-auto"
                          color=""
                          height="100"
                          width="100"
                        >
                          <!-- <v-icon>code</v-icon> -->
                        </v-sheet>
                        <div></div>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-container>
                <v-divider class="mx-4" color="#F9BE06"></v-divider>
                <v-card-title>Relico - Ecommerce</v-card-title>
                <v-divider class="mx-4" color="#F9BE06"></v-divider>
                <v-card-text>
                  <div class="mb-4 text-subtitle-1">
                    Demo
                  </div>
                  <div>
                    The light ecommerce product that allows users to set
                    different prices for a product, that vary depending on the
                    customer's country.
                  </div>
                </v-card-text>
                <v-divider class="mt-6 mx-4" color="#F9BE06"></v-divider>

                <v-card-text>
                  <v-chip>
                    Vuejs
                  </v-chip>
                  <v-chip class="ml-1">
                    Nodejs
                  </v-chip>
                  <v-chip  class="ml-1">
                    Stripe
                  </v-chip>
                </v-card-text>
              </v-card>
                </v-col>
              </v-row>
            </v-col
            ></v-row
          >
        </v-container>
        <!--  <v-card
      :loading="loading"
      class="mx-auto my-12 round-radius-2"
      max-width="374"
    >
       <v-container >
      <v-row justify="space-around">
        <v-col
          cols="12"
              
        >
          <v-sheet
            class="pa-12"
            color="#F9BE06"
                   
          >
            <div></div>
            <v-sheet
              rounded="xl"
              class="mx-auto"
              color=""
              height="100"
              width="100"
            ></v-sheet>
            <div></div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
        <v-divider class="mx-4" color="#62ADF4"></v-divider>
             <v-card-text>
        <div>Sat Jun 19 2021</div>
        <p class="text-h6">
           How to create vuex modules
        </p>
      </v-card-text>
    </v-card>-->
      </v-content>
      <div style="position:absolute;top:1px;left:0px; font-size:9px">
        {{ "Not responsive yet - WIP" }}
      </div>
    </v-main>
  </v-app>
</template>
<script>
import * as animationData from "./assets/dev-at-work.json";
import * as backgroundAnimationData from "./assets/background.json";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import ReachOut from "./components/ReachOut.vue";
import { VueAnime } from "vue-anime";
import { VueAnimeGroup } from "vue-anime";
import { VueAnimeTimeLine } from "vue-anime";
import moment from "moment";
export default {
  name: "App",
  components: {
    AboutMe,
    Experience,
    Projects,
    ReachOut,
    VueAnime,
    VueAnimeGroup,
    VueAnimeTimeLine,
  },
  created() {
    console.log(this.$vuetify.breakpoint);
  },
  mounted() {
    window.setInterval(() => {
      this.pollReachOutText();
    }, 5000);
  },
  computed: {
    noofyearsofexperience() {
      var a = moment();
      var b = moment("08-2019", "MM-YYYY");
      var age = moment.duration(a.diff(b));
      var years = age.years();
      var months = age.months();
      return `${years} year and ${months} months`;
    },
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },

    stop: function() {
      this.anim.stop();
    },

    play: function() {
      this.anim.play();
    },

    pause: function() {
      this.anim.pause();
    },

    onSpeedChange: function() {
      this.anim.setSpeed(this.animationSpeed);
    },

    pollReachOutText() {
      const first = this.reachoutText.shift();
      this.reachoutText = this.reachoutText.concat(first);
    },
  },
  data: () => ({
    isReachOut: false,
    expand: false,
    defaultOptions: { animationData: animationData.default },
    defaultBackgroundOptions: {
      animationData: backgroundAnimationData.default,
    },
    animationSpeed: 1,
    options: ["Reach out to me", "Experience", "Projects", "Resume."],
    activeTab: "Experience",
    projects: {
      icon: "science",
      title: "Projects/My Work",
      showDialog: false,
    },
    experience: {
      icon: "home_repair_service",
      title: "Experience",
      showDialog: false,
    },
    reachOutToMe: {
      icon: "remember_me",
      title: "Reach out to me",
      showDialog: false,
    },
    colSize: 3,
    expandedPanelName: null,
    reachoutText: ["Reach out to me", "Hire me"],
    isArrowButtonClicked: true,
  }),
};
</script>
<style>
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #f5f5f5;
}

body::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    color-stop(0.5, rgba(255, 255, 255, 0.2)),
    color-stop(0.5, transparent),
    to(transparent)
  );
}

.round-radius {
  border: 2px solid #f9be06 !important;
  /* border-radius: 25px !important;
  border-color: #F9BE06 !important; */
}
.round-radius-2 {
  border: 2px solid #62adf4 !important;
  /* border-radius: 25px !important;
  border-color: #F9BE06 !important; */
}
</style>
<style lang="scss">
@keyframes float {
  0% {
    // box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    // box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-6px);
  }
  100% {
    // box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
}
.float-animation-effect {
  animation: float 6s ease-in-out infinite;
}

.google-border {
  border-radius: 10px !important;
}
</style>
