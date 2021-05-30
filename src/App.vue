<template>
  <v-app id="inspire">
    <v-main :style="{ background: $vuetify.theme.defaults.light.secondary }">
      <v-container :fill-height="!isArrowButtonClicked">
        <v-row dense justify="center" v-if="isArrowButtonClicked"
          >
          <v-col cols="12" class="pb-0">
            <lottie
              :options="defaultOptions"
              :height="200"
              :width="300"
              v-on:animCreated="handleAnimation"
            />
          </v-col>
          <v-col :cols="expand ? 12 : 4" class="pt-0">
            <v-expand-x-transition mode="in" hide-on-leave="true">
              <v-expansion-panels
                :class="{ 'elevation-5': !expand }"
                class="float-animation-effect google-border"
              >
                <v-expansion-panel
                  popout
                  @click="
                    () => {
                      (expand = !expand),
                        (!expandedPanelName
                          ? (expandedPanelName = projects.title)
                          : (expandedPanelName = null),
                        (isReachOut = false));
                    }
                  "
                  v-show="
                    expandedPanelName == projects.title || !expandedPanelName
                  "
                >
                  <v-expansion-panel-header
                    class="primary--text"
                    disable-icon-rotate
                  >
                    <span class="font-weight-bold">{{ projects.title }}</span>
                    <template v-slot:actions>
                      <v-btn color="primary" class="text-capitalize" icon>
                        <v-icon
                          color="primary"
                          @click="projects.showDialog = false"
                        >
                          {{
                            expand && expandedPanelName == projects.title
                              ? "mdi-close"
                              : projects.icon
                          }}
                        </v-icon>
                      </v-btn>
                    </template></v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    <v-sheet width="90vh" height="90vh" rounded>
                      <projects v-if="expandedPanelName == 'Projects'" />
                    </v-sheet>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel
                  popout
                  @click="
                    () => {
                      (expand = !expand),
                        (!expandedPanelName
                          ? (expandedPanelName = experience.title)
                          : (expandedPanelName = null),
                        (isReachOut = false));
                    }
                  "
                  v-show="
                    expandedPanelName == experience.title || !expandedPanelName
                  "
                >
                  <v-expansion-panel-header
                    class="primary--text"
                    disable-icon-rotate
                  >
                    <span class="font-weight-bold">{{ experience.title }}</span>
                    <template v-slot:actions>
                      <v-btn icon>
                        <v-icon
                          color="primary"
                          @click="experience.showDialog = false"
                        >
                          {{
                            expand && expandedPanelName == experience.title
                              ? "mdi-close"
                              : experience.icon
                          }}
                        </v-icon>
                      </v-btn>
                    </template></v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    <v-sheet width="90vh" height="90vh" rounded>
                      <experience v-if="expandedPanelName == 'Experience'" />
                    </v-sheet>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel
                  @click="
                    () => {
                      isReachOut = !isReachOut;
                    }
                  "
                  v-show="
                    expandedPanelName == reachOutToMe.title ||
                      !expandedPanelName
                  "
                >
                  <v-expansion-panel-header
                    class="primary--text"
                    disable-icon-rotate
                  >
                    <span class="font-weight-bold">{{ reachoutText[0] }}</span>
                    <template v-slot:actions>
                      <v-btn icon>
                        <v-icon
                          color="primary"
                          @click="reachOutToMe.showDialog = false"
                        >
                          {{
                            expand && expandedPanelName == reachOutToMe.title
                              ? "mdi-close"
                              : reachOutToMe.icon
                          }}
                        </v-icon>
                      </v-btn>
                    </template></v-expansion-panel-header
                  >
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expand-x-transition>
          </v-col>
          <v-col cols="12"> <reach-out v-if="isReachOut"/></v-col>
        </v-row>
        <v-row dense justify="center" v-show="!isArrowButtonClicked">
          <v-col cols="6" class="pa-0 ma-0">
            <vue-anime
              ref="demo9"
              class="square"
              :animate="{
                translateX: {
                  value: 20,
                  duration: 800,
                  easing: 'easeInOutSine',
                },
                scale: {
                  value: 0.9,
                  duration: 1600,
                  delay: 800,
                  easing: 'easeInOutQuart',
                },
                delay: 250,
              }"
            >
              <v-card
                class="mx-auto primary--text google-border"
                :class="{'float-animation-effect':isArrowButtonClicked&&!expand}"
                color="white"
                max-width="500"
                @click="isArrowButtonClicked = !isArrowButtonClicked"
              >
                <v-row align="center" justify="center">
                  <v-col :cols="12" class="ma-0 pa-0">
                    <v-list-item
                      three-line
                      class="align-center ma-0 pa-0 justify-center"
                    >
                      <v-list-item-avatar tile size="180" class="ma-0 pa-0"
                        ><lottie
                          :options="defaultOptions"
                          :height="180"
                          :width="180"
                          v-on:animCreated="handleAnimation"
                      /></v-list-item-avatar>
                    </v-list-item>
                  </v-col>
                </v-row>

                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title class="display-1 accent--text">
                      Akshay Devadiga
                    </v-list-item-title>
                    <v-list-item-subtitle class="accent--text"
                      >Creative Developer</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-card-text>
                  <p class="body-1 accent--primary">
                    {{`Frontend developer with ${noofyearsofexperience} of experience. Keen on
                    writing clean and maintainable code and with more emphasis
                    on building user centric features. Aside from product
                    development, I enjoy spending my time listening podcasts,
                    playing games.`}}
                  </p>
                </v-card-text>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-subtitle class="accent--text"
                      >Specailties</v-list-item-subtitle
                    >

                    <v-row class="pt-1">
                      <v-col>
                        <v-chip color="primary" text-color="primary" outlined>
                          <v-avatar left>
                            <v-img
                              contain
                              height="30"
                              width="30"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
                            />
                          </v-avatar>
                          Vuejs
                        </v-chip>
                        <v-chip color="#323330" text-color="white" class="ml-1">
                          <v-avatar tile left>
                            <v-icon color="#f0db4f"
                              >mdi-language-javascript
                            </v-icon>
                          </v-avatar>
                          Javascript
                        </v-chip>
                        <v-chip color="#0198DC" text-color="white" class="ml-1">
                          <v-avatar tile left>
                            <v-icon>mdi-vector-polygon </v-icon>
                          </v-avatar>
                          Fabricjs
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-card-actions class="py-4">
                  <v-row align="center" justify="center">
                    <v-btn text color="transperent" class="caption">
                      Click for more details
                      <v-icon color="primary">arrow_forward_ios</v-icon>
                    </v-btn>
                  </v-row>
                </v-card-actions>
              </v-card>
            </vue-anime>
          </v-col>
        </v-row>
      </v-container>
    <div style="position:absolute;top:1px;left:0px; font-size:9px">{{'Not responsive yet - WIP'}}</div>
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
  computed:{
    noofyearsofexperience(){
  var a = moment();
var b = moment('08-2019', 'MM-YYYY');
var age = moment.duration(a.diff(b));
var years = age.years();
var months = age.months();
      return `${years} year and ${months} months`;
    }
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
      title: "Projects",
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
    isArrowButtonClicked: false,
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
