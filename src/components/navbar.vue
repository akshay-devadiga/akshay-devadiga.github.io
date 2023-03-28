<template>
  <v-app-bar color="transparent" app flat>
    <v-toolbar-title>
      <v-avatar size="40" rounded="0">
        <v-img
          lazy-src="/images/undraw_developer.svg"
          src="/images/undraw-developer.svg"
          contain
        ></v-img>
      </v-avatar>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div  class="px-2" v-for="socialOption in socialOptions" :key="socialOption.id">
      <v-btn
        variant="elevated"
        size="small"
        :color="socialOption.color"
        @click="goToLink(socialOption.link)"
      >
        <v-icon size="small" color="white" left>{{ socialOption.icon }}</v-icon> <span class="ml-1 text-caption text-white"> {{socialOption.name}} </span>
      </v-btn>
    </div>
  </v-app-bar>
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
        {
          id: 1,
          name: 'LinkedIn',
          icon: 'mdi-linkedin',
          color:'#0072b1',
          link: 'https://in.linkedin.com/in/akshay-devadiga-652687115'
        },
        { id: 2, icon: 'mdi-github', name: 'Github', color:'black', link: 'https://github.com/akshay-devadiga' },
        {
          id: 3,
          name: 'Whatsapp',
          icon: 'mdi-whatsapp',
           color:'#25d366',
          link: 'https://api.whatsapp.com/send?phone=+916361062209&text=Hi,%20I%20contacted%20you%20through%20your%20portfolio%20website.'
        }
      ]
    }
  },
  computed: {
    isDetailsPage() {
      return this.$route.name == 'details'
    }
  },
  methods: {
    goToPage(route) {
      if (route == 'resume') {
        window
          .open(
            'https://drive.google.com/file/d/1eYCJ_f7IQWqYVE17wPv_kLSPkVHg0trK/view?usp=sharing',
            '_blank'
          )
          .focus()
        return
      }
      this.$router.push({ name: route })
    },
    goToLink(route) {
      window.open(route, '_blank').focus()
    }
  }
}
</script>
