
<template>
 <v-container class="fill-height">
     <v-row class="justify-center align-center fill-height" >
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