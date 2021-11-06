
<template>
    <VuePerfectScrollbar
      class="mt-2"
      :style="
        `max-height: ${$vuetify.breakpoint.height -
          $vuetify.breakpoint.height * 0.05}px !important; overflow:hidden !important`
      "
      :class="{'main-content':isDetailsPage}"
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
      computed: {
    isDetailsPage() {
      return this.$route.name=='details';
    }
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
  .main-content{
    height:100% !important;
  }
</style>