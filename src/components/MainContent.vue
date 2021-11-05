
<template>
 <v-container class="fill-height main-container">
     <VuePerfectScrollbar :style="`max-height: ${$vuetify.breakpoint.height-$vuetify.breakpoint.height*0.1}px !important`" :settings="settings">
     <v-row class="justify-center align-center" >
          <transition name="slide-right">
             <router-view></router-view>
          </transition>
      </v-row>
  </VuePerfectScrollbar>
     
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

<style lang="scss" scoped>
//  .scroll-area {
//   max-height: 90vh;
// }
</style>