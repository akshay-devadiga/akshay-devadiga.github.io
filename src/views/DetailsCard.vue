<template>
  <v-card
    class="mx-auto primary--text google-border"
    color="white"
    max-width="500"
    @click="goToDetails"
  >
  <!-- :class="{ 'float-animation-effect': isArrowButtonClicked }" -->
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="display-1 accent--text">
          Akshay Devadiga
        </v-list-item-title>
        <!-- <v-list-item-subtitle class="accent--text"
                      >Creative Developer</v-list-item-subtitle
                    > -->
        <v-list-item-subtitle class="accent--text"
          >WEB DEV | FRONT-END ENGINEER | UX DESIGNER</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <p class="body-1 accent--primary">
        {{
          `Frontend developer with ${noofyearsofexperience} of experience. Keen on
                    writing clean and maintainable code and with more emphasis
                    on building user centric features. Aside from product
                    development, I enjoy spending my time listening to podcasts,
                    playing games.`
        }}
      </p>
    </v-card-text>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-subtitle class="accent--text"
          >Specailties</v-list-item-subtitle
        >

        <v-row class="pt-1">
          <v-col>
            <v-chip color="primary" text-color="primary" outlined>
              <v-avatar left>
                <v-img
                  contain
                  height="30"
                  width="30"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
                />
              </v-avatar>
              Vuejs
            </v-chip>
            <v-chip color="#323330" text-color="white" class="ml-1">
              <v-avatar tile left>
                <v-icon color="#f0db4f">mdi-language-javascript </v-icon>
              </v-avatar>
              Javascript
            </v-chip>
            <v-chip color="#0198DC" text-color="white" class="ml-1">
              <v-avatar tile left>
                <v-icon>mdi-vector-polygon </v-icon>
              </v-avatar>
              Fabricjs
            </v-chip>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-card-actions class="py-4">
      <v-row align="center" justify="center">
               <v-btn text color="transperent" background-color="secondary" class="caption">
          Click for more details
          <v-icon color="primary">arrow_forward_ios</v-icon>
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
    data() {
        return {
            isArrowButtonClicked: true
        }
    },
  computed: {
    noofyearsofexperience() {
      var a = moment();
      var b = moment("08-2019", "MM-YYYY");
      var age = moment.duration(a.diff(b));
      var years = age.years();
      var months = age.months();
      return `${years} year and ${months} months`;
    },
  },
  methods:{
      goToDetails(){
          this.$router.push({name:'aboutme'});
          this.$emit('goToDetails');
          this.isArrowButtonClicked = !this.isArrowButtonClicked;
      }
  }
};
</script>

<style lang="scss" scoped>
.details-btn {
  min-width: 100% !important;
}
.float-animation-effect {
  animation: float 6s ease-in-out infinite;
}

.google-border {
  border-radius: 10px !important;
}
</style>
