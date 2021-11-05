<template>
    <v-container class="fill-height" v-if="isDetailsPage">
      <v-row class="justify-end align-end">
        <v-col cols="9">
          <v-img
            transition="scale-transition"
            origin="center center"
            class="float-animation-effect"
            src="/images/undraw_developer.svg"
            contain
            aspect-ratio="1"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else class="fill-height">
      <v-row class="justify-center align-center" >
        <v-col cols="6" offset="1" v-for="sidebarOption in sidebarOptions" :key="sidebarOption.id">
          <v-btn color="white" class="d-block mx-2 grey--text sidebar-btn" @click="goToPage(sidebarOption.route)">
            <v-icon left dark color="secondary" style="font-size:27px">
              {{sidebarOption.icon}}
            </v-icon>
            <span class="ml-2">{{sidebarOption.name}} </span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="justify-center align-center">
        <v-col cols="2" class="">
          <v-row class="justify-center align-center">
            <v-col cols="12" v-for="socialOption in socialOptions" :key="socialOption.id"><v-btn small @click="goToLink(socialOption.link)" icon color="white">
                <v-icon style="font-size:30px" large>{{socialOption.icon}}</v-icon>
              </v-btn></v-col
            >
          </v-row>
        </v-col>
        <v-col cols="7">
          <v-img
            transition="scale-transition"
            origin="center center"
            class="float-animation-effect"
            src="/images/undraw_developer.svg"
            contain
            aspect-ratio="1"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      sidebarOptions: [
        { id:1,name: "Experience", icon: "work", route:'experience' },
        //   { name:'Projects', icon:'folder'},
        { id:2,name: "Projects", icon: "science" , route:'projects' },
        { id:3,name: "Articles", icon: "art_track", route:'articles' },
        { id:4,name: "Resume", icon: "download", route:'resume' },
      ],
      socialOptions: [
        { id:1,icon: "mdi-linkedin" , link:"https://in.linkedin.com/in/akshay-devadiga-652687115" },
        { id:2,icon: "mdi-github", link:"https://github.com/akshay-devadiga" },
        { id:3,icon: "mdi-whatsapp", link: "https://api.whatsapp.com/send?phone=+918105171418&text=Hi,%20I%20contacted%20you%20through%20your%20portfolio%20website." }
      ],
    };
  },
  computed: {
    isDetailsPage() {
      return this.$route.name=='details';
    }
  },
  methods:{
    goToPage(route){
      if(route=='resume'){
        window.open('https://drive.google.com/file/d/1eYCJ_f7IQWqYVE17wPv_kLSPkVHg0trK/view?usp=sharing', '_blank').focus();
        return;
      }
      this.$router.push({'name':route })
    },
    goToLink(route){
       window.open(route, '_blank').focus();
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar-btn {
  min-width: 100% !important;
  
}

::v-deep .sidebar-btn .v-btn__content{
  //width:fit-content !important;
}
</style>
