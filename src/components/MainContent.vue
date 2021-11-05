
<template>
 <v-container class="fill-height main-container">
    
     <v-row class="justify-center align-center" >
          <transition name="slide-right">
             <router-view></router-view>
          </transition>
      </v-row>
     
    </v-container>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  export default {
    components:{
      VuePerfectScrollbar
    },
     data() {
    return {
      settings: {
        maxScrollbarLength: 160,
        suppressScrollX:true
      }
    }
  },
  }
</script>