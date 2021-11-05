<template>
  <v-container>
    <v-row justify="center" align="center"
      ><v-col cols="1" class="text-center"
        ><v-btn
          href="https://www.linkedin.com/in/akshay-devadiga-652687115"
          target="_blank"
          class="linkedIn-btn float-animation-effect"
          fab small color="white" 
        >
          <v-icon color="primary">
            mdi-linkedin
          </v-icon>
        </v-btn></v-col
      ><v-col cols="1" class="text-center"
        ><v-btn  href="mailto:akshaydevadiga4@gmail.com" class="gmail-btn float-animation-effect" target="_blank" fab small color="white" >
          <v-icon  color="primary">
            mdi-gmail
          </v-icon>
        </v-btn>
        
        </v-col
      ><v-col cols="1" class="text-center"
        ><v-btn @click="copyContactNumberToClipboard" class="phone-btn float-animation-effect" fab small color="white" >
          <v-icon color="primary">
            mdi-phone
          </v-icon>
        </v-btn>
        
        </v-col
        
      >
      
      </v-row
    >
    <v-row>    <v-snackbar
         timeout="2000"
        v-model="snackbar"
        color="primary"
        min-width="20"
      >
        {{ "Contact number copied successfully" }}
      </v-snackbar></v-row>
  </v-container>
</template>

<script>
export default {
    methods:{
         copyContactNumberToClipboard () {
          navigator.clipboard.writeText('8105171418');
          this.snackbar=true;
        }
    },
    data(){
        return{
            snackbar:false
        }
    }
};
</script>
<style>
.linkedIn-btn{
    border-top-left-radius: 100%  !important;
    /* border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%; */
}
.gmail-btn{
    /* border-top-left-radius: 100%; */
    border-bottom-left-radius: 100% !important;
    /* border-bottom-right-radius: 100%; */
}
.phone-btn{
    /* border-top-left-radius: 100%;
    border-bottom-left-radius: 100%; */
    border-bottom-right-radius: 100% !important;
}

</style>
