
<template>
    <VuePerfectScrollbar
      class="mt-2"
      :style="
        `max-height: ${$vuetify.breakpoint.height -
          $vuetify.breakpoint.height * 0.05}px !important`
      "
      :settings="settings"
    >
 <v-container class="fill-height">
     <v-row class="justify-center align-center fill-height" >
          <transition name="slide-right">
             <router-view></router-view>
          </transition>
      </v-row>
    </v-container>
        </VuePerfectScrollbar>
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