<template>
    <v-container class="fill-height primary">
      <!-- <v-row class="justify-center align-center" >
        <v-col cols="6" offset="1" v-for="sidebarOption in sidebarOptions" :key="sidebarOption.id">
          <v-btn color="white" class="d-block mx-2 grey--text sidebar-btn" @click="goToPage(sidebarOption.route)">
            <v-icon left dark color="secondary" style="font-size:27px">
              {{sidebarOption.icon}}
            </v-icon>
            <span class="ml-2">{{sidebarOption.name}} </span>
          </v-btn>
        </v-col>
      </v-row> -->
      <v-row class="justify-center align-center">
        <v-col cols="4" class="">
          <v-row class="justify-center align-center">
            <v-col  v-for="socialOption in socialOptions" :key="socialOption.id">
            <v-btn  variant="outlined"
        size="small"
        color="white"
         :icon="socialOption.icon" @click="goToLink(socialOption.link)"/>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="7">
          <v-img
            lazy-src="/images/undraw_developer.svg"
            src="/images/undraw-developer.svg"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
    //   sidebarOptions: [
    //     { id:1,name: "Experience", icon: "work", route:'experience' },
    //     //   { name:'Projects', icon:'folder'},
    //     { id:2,name: "Projects", icon: "science" , route:'projects' },
    //     { id:3,name: "Articles", icon: "art_track", route:'articles' },
    //     { id:4,name: "Resume", icon: "download", route:'resume' },
    //   ],
      socialOptions: [
        { id:1,icon: "mdi-linkedin" , link:"https://in.linkedin.com/in/akshay-devadiga-652687115" },
        { id:2,icon: "mdi-github", link:"https://github.com/akshay-devadiga" },
        { id:3,icon: "mdi-whatsapp", link: "https://api.whatsapp.com/send?phone=+916361062209&text=Hi,%20I%20contacted%20you%20through%20your%20portfolio%20website." }
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