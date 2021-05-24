<template>
  <v-app id="inspire">
    <v-main :style="{ background: $vuetify.theme.defaults.light.secondary }">
      <v-container>
        <v-row dense justify="center">
          <v-col cols="12" class="pb-0">
            <lottie
              :options="defaultOptions"
              :height="200"
              :width="300"
              v-on:animCreated="handleAnimation"
            />
          </v-col>
          <v-col :cols="expand ? 12 : 3" class="pt-0">
            <v-expansion-panels :class="{'elevation-5':!expand}">
            <v-expansion-panel
              popout 
                @click="
                  () => {
                    (expand = !expand), (!expandedPanelName?expandedPanelName = projects.title:expandedPanelName=null);
                  }
                "
                v-show="expandedPanelName==projects.title|| !expandedPanelName"
              >
                <v-expansion-panel-header
                  class="primary--text"
                  disable-icon-rotate
                >
                  <span class="font-weight-bold">{{ projects.title }}</span>
                  <template v-slot:actions>
                    <v-btn color="primary" class="text-capitalize" icon>
                     <v-icon color="primary" @click="projects.showDialog=false">
                      {{ expand && expandedPanelName==projects.title?'mdi-close' :projects.icon }}
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
                    (expand = !expand), (!expandedPanelName?expandedPanelName = experience.title:expandedPanelName=null);
                  }
                "
                v-show="expandedPanelName==experience.title|| !expandedPanelName"
              >
                <v-expansion-panel-header
                  class="primary--text"
                  disable-icon-rotate
                >
                  <span class="font-weight-bold">{{ experience.title }}</span>
                  <template v-slot:actions>
                    <v-btn icon>
                     <v-icon color="primary" @click="experience.showDialog=false">
                      {{ expand && expandedPanelName==experience.title?'mdi-close' :experience.icon }}
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
              popout 
                @click="
                  () => {
                    (expand = !expand), (!expandedPanelName?expandedPanelName = reachOutToMe.title:expandedPanelName=null);
                  }
                "
                v-show="expandedPanelName==reachOutToMe.title|| !expandedPanelName"
              >
                <v-expansion-panel-header
                  class="primary--text"
                  disable-icon-rotate
                >
                  <span class="font-weight-bold">{{ reachOutToMe.title }}</span>
                  <template v-slot:actions>
                    <v-btn icon>
                     <v-icon color="primary" @click="reachOutToMe.showDialog=false">
                      {{ expand && expandedPanelName==reachOutToMe.title?'mdi-close' :reachOutToMe.icon }}
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
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import * as animationData from "./assets/dev-at-work.json";
import * as backgroundAnimationData from "./assets/background.json";
import AboutMe from "./components/AboutMe";
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
export default {
  name: "App",

  components: {
    AboutMe,
    Experience,
    Projects
  },
  created() {
    console.log(this.$vuetify.breakpoint);
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
  },
  data: () => ({
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
    experience:{ icon: "home_repair_service", title: "Experience", showDialog: false },
    reachOutToMe:{icon: "remember_me", title: "Reach out to me", showDialog: false},
    lottieHeight: 200,
    lottieWidth: 200,
    colSize: 3,
    expandedPanelName:null
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
