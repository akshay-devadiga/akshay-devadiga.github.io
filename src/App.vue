<template>
  <v-app id="inspire">
    <v-main>
      <v-content class="fill-height">
        <v-container fluid class="fill-height pa-0 ma-0">
          <v-row class="fill-height"
            ><v-col
              cols="4"
              :style="{ background: $vuetify.theme.defaults.light.secondary }"
            >
              <v-row class="justify-center align-center fill-height">
                <v-col cols="12">
                  <sidebar />
                </v-col>
              </v-row> </v-col
            ><v-col cols="8" :style="{ background: isDetailsPage ? $vuetify.theme.defaults.light.secondary: 'white' }">
              <v-row class="justify-center align-center fill-height">
                <v-col cols="12" class="fill-height" >
                  <main-content />
                </v-col>
              </v-row> </v-col
          ></v-row>
        </v-container>
      </v-content>
    </v-main>
  </v-app>
</template>
<script>
import * as animationData from "./assets/dev-at-work.json";
import * as backgroundAnimationData from "./assets/background.json";
// import AboutMe from "./components/AboutMe";
// import Experience from "./components/Experience.vue";
// import Projects from "./components/Projects.vue";
// import ReachOut from "./components/ReachOut.vue";
import Sidebar from "./components/Sidebar.vue";
import MainContent from "./components/MainContent.vue";
// import { VueAnime } from "vue-anime";
// import { VueAnimeGroup } from "vue-anime";
// import { VueAnimeTimeLine } from "vue-anime";
import moment from "moment";
export default {
  name: "App",
  components: {
    // AboutMe,
    // Experience,
    // Projects,
    // ReachOut,
    // VueAnime,
    // VueAnimeGroup,
    // VueAnimeTimeLine,
    Sidebar,
    MainContent,
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
    isDetailsPage() {
      return this.$route.name=='details';
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
// @keyframes float {
//   0% {
//     // box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
//     transform: translatey(0px);
//   }
//   50% {
//     // box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
//     transform: translatey(-6px);
//   }
//   100% {
//     // box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
//     transform: translatey(0px);
//   }
// }
// .float-animation-effect {
//   animation: float 6s ease-in-out infinite;
// }

.google-border {
  border-radius: 10px !important;
}
</style>
