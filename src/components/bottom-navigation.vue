<template>
    <v-bottom-navigation
      v-show="!isDetailsPage"
      app
      background-color="secondary"
      color="primary"
    >
      <v-btn v-for="sidebarOption in sidebarOptions" :key="sidebarOption" @click="goToPage(sidebarOption.route)">
        <span class="white--text">{{ sidebarOption.name }}</span>
        <v-icon color="white">{{ sidebarOption.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      sidebarOptions: [
        { id: 1, name: "Experience", icon: "work", route: "experience" },
        //   { name:'Projects', icon:'folder'},
        { id: 2, name: "Projects", icon: "science", route: "projects" },
        { id: 3, name: "Articles", icon: "art_track", route: "articles" },
        { id: 4, name: "Resume", icon: "download", route: "resume" },
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

<style lang="scss" scoped></style>
