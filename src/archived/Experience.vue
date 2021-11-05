<template>
  <v-container fluid class="fill-height">
    <v-row>
      <v-col cols="12">
        <v-timeline>
          <v-timeline-item
            v-for="n in experience"
            :key="n"
            :color="n.color"
            large
          >
            <template v-slot:opposite>
              <span>{{ n.year }}</span>
            </template>
            <v-card class="elevation-2" height="200">
              <v-card-title>
                <v-list-item class="ma-0 pa-0">
                  <v-list-item-content class="ma-0 pa-0">
                    <v-list-item-title>
                      <v-avatar
                        :width="n.title == 'Student Developer' ? null : 100"
                        tile
                      >
                        <v-img contain :src="n.logo" />
                      </v-avatar>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <span class="body-1 ml-0 font-weight-bold">{{
                        n.title
                      }}</span>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card-title>
              <v-card-text class="my-0 px-3 pa-0 font-weight-medium">
                {{ n.description }}
              </v-card-text>
              <v-card-actions class="ma-0 pa-0">
                <div class="ma-0  px-3 pa-0">
                  <v-chip-group active-class="primary--text" column>
                    <v-chip
                      v-for="tag in n.tags"
                      :key="tag"
                      :color="n.color"
                      class="white--text"
                      small
                    >
                      {{ tag }}
                    </v-chip>
                  </v-chip-group>
                </div>
              </v-card-actions>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col></v-row>
  </v-container>
</template>

<script>
import * as animationData from "../assets/wip.json";
export default {
  data: () => ({
    isReachOut: false,
    expand: false,
    defaultOptions: { animationData: animationData.default },
    experience: [
      {
        color: "#37369C",
        year:
          "December 2017 - Jan 2018, May 2018 - June 2018 ,December 2018 - June 2019",
        logo: "https://i.imgur.com/plHydwW.jpg",
        title: "Student Developer",
        description:
          "I was part of a team that developed/maintained multiple android,web applications during the vacations and internship period.",
        tags: ["Android", "PHP", "React", "React-Native"],
      },
      {
        color: "green",
        year: "August 2019 - Present",
        logo:
          "https://www.deltax.com/wp-content/uploads/2018/04/Delta-horizontal-revision-topbar.png",
        title: "Associate Product Engineer",
        description:
          "Currently working as frontend engineer with multiple responsiblities ranging from building new features, owning modules...",
        tags: ["Fabricjs", "Vuejs", "MSSql", "Javascript"],
      },
    ],
  }),
};
</script>

<style></style>
