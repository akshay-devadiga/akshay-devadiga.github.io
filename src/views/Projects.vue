<template>
  <v-container  class="mx-4">
    <v-row class="justify-center align-center">
      <v-col cols="6" class="py-2">
        <v-btn-toggle v-model="projects">
          <v-btn>
            Web Dev
          </v-btn>

          <v-btn>
            UX 
          </v-btn>

          <v-btn>
            Graphic Design 
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-row class="justify-space-between" v-if="projects==0">
      <v-col cols="6" v-for="i in 6" :key="i">
         <v-card
                class="mx-auto my-12 round-radius"
                max-width="374"
              >
                <v-container>
                  <v-row justify="space-around">
                    <v-col cols="12">
                      <v-sheet class="pa-12" color="primary lighten-1">
                        <div></div>
                        <v-sheet
                          rounded="xl"
                          class="mx-auto"
                          color=""
                          height="100"
                          width="100"
                        >
                          <!-- <v-icon>code</v-icon> -->
                        </v-sheet>
                        <div></div>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-container>
                <v-divider class="mx-4" color="#F9BE06"></v-divider>
                <v-card-title>Relico - Ecommerce</v-card-title>
                <v-divider class="mx-4" color="#F9BE06"></v-divider>
                <v-card-text>
                  <div class="mb-4 text-subtitle-1">
                    Demo
                  </div>
                  <div>
                    The light ecommerce product that allows users to set
                    different prices for a product, that vary depending on the
                    customer's country.
                  </div>
                </v-card-text>
                <v-divider class="mt-6 mx-4" color="#F9BE06"></v-divider>

                <v-card-text>
                  <v-chip>
                    Vuejs
                  </v-chip>
                  <v-chip class="ml-1">
                    Nodejs
                  </v-chip>
                  <v-chip  class="ml-1">
                    Stripe
                  </v-chip>
                </v-card-text>
              </v-card>
      </v-col>
    </v-row>
    <v-row class="justify-space-between" v-else> 
         <v-col cols="6" v-for="i in 2" :key="i">
         <v-card
                class="mx-auto my-12 round-radius"
                max-width="374"
              >
                <v-container>
                  <v-row justify="space-around">
                    <v-col cols="12">
                      <v-sheet class="pa-12" color="primary lighten-1">
                        <div></div>
                        <v-sheet
                          rounded="xl"
                          class="mx-auto"
                          color=""
                          height="100"
                          width="100"
                        >
                          <!-- <v-icon>code</v-icon> -->
                        </v-sheet>
                        <div></div>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-container>
                <v-divider class="mx-4" color="#F9BE06"></v-divider>
                <v-card-title>Relico - Ecommerce</v-card-title>
                <v-divider class="mx-4" color="#F9BE06"></v-divider>
                <v-card-text>
                  <div class="mb-4 text-subtitle-1">
                    Demo
                  </div>
                  <div>
                    The light ecommerce product that allows users to set
                    different prices for a product, that vary depending on the
                    customer's country.
                  </div>
                </v-card-text>
                <v-divider class="mt-6 mx-4" color="#F9BE06"></v-divider>

                <v-card-text>
                  <v-chip>
                    Vuejs
                  </v-chip>
                  <v-chip class="ml-1">
                    Nodejs
                  </v-chip>
                  <v-chip  class="ml-1">
                    Stripe
                  </v-chip>
                </v-card-text>
              </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects:0
    };
  },
};
</script>

<style lang="scss" scoped></style>
