<template>
  <v-container class="mx-4">
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
      <v-row class="justify-space-between" v-if="projects == 0">
        <v-col cols="6" v-for="webProject in webProjects" :key="webProject">
          <v-card class="mx-auto my-12 round-radius" max-width="374">
            <v-img
              contain
              aspect-ratio="1"
              height="250"
              class="ma-2"
              :lazy-src="webProject.projectImageUrl"
              :src="webProject.projectImageUrl"
            ></v-img>
            <v-card-title class="my-1 py-1">{{ webProject.title }}</v-card-title>
            <v-divider class="mx-4 " color="#F9BE06"></v-divider>
            <v-card-text class="my-0 py-0">
              <div class="mb-2 text-subtitle-1">
                <v-btn
                  rounded
                  color="secondary"
                  dark
                  small
                  :disabled="!webProject.demoUrl"
                  @click="goToDemo(webProject.demoUrl)"
                >
                  Demo
                </v-btn>
              </div>

              <div>
                {{ webProject.description }}
              </div>
            </v-card-text>
            <v-divider class="mt-6 mx-4" color="#F9BE06"></v-divider>

            <v-card-text>
              <v-row class="pt-1">
                <v-col>
                  <v-chip
                    color="primary"
                    v-for="tag in webProject.tags"
                    :key="tag"
                    text-color="primary"
                    outlined
                    class="ml-1"
                    small
                  >
                    <div v-if="tag.hasOnlyImage">
                      <v-avatar
                        size="70"
                        style="min-width:70px !important"
                        
                      >
                        <v-img
                          contain
                          aspect-ratio="1"
                          :lazy-src="tag.imageUrl"
                          :src="tag.imageUrl"
                        />
                      </v-avatar>
                    </div>
                    <div v-else>
                      <v-avatar
                        :tile="tag.hasTile"
                        :class="{ 'pa-1': tag.hasTile }"
                        left
                        class="ml-2"
                      >
                        <v-img
                          contain
                          height="30"
                          width="30"
                          :lazy-src="tag.imageUrl"
                          :src="tag.imageUrl"
                        />
                      </v-avatar>
                      {{tag.title}}
                    </div>
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="justify-space-between" v-else-if="projects == 1">
        <v-col cols="6" v-for="uxProject in uxProjects" :key="uxProject">
          <v-card class="mx-auto my-12 round-radius" max-width="374">
            <v-img
              contain
              aspect-ratio="1"
              height="250"
              class="ma-2"
              :lazy-src="uxProject.projectImageUrl"
              :src="uxProject.projectImageUrl"
            ></v-img>
            <v-card-title class="my-1 py-1">{{ uxProject.title }}</v-card-title>
            <v-divider class="mx-4 " color="#F9BE06"></v-divider>
            <v-card-text class="my-0 py-0">
              <div class="mb-2 text-subtitle-1">
                <v-btn
                  rounded
                  color="secondary"
                  dark
                  small
                  :disabled="!uxProject.demoUrl"
                  @click="goToDemo(uxProject.demoUrl)"
                >
                  Demo
                </v-btn>
              </div>

              <div>
                {{ uxProject.description }}
              </div>
            </v-card-text>
            <v-divider class="mt-6 mx-4" color="#F9BE06"></v-divider>

            <v-card-text>
              <v-row class="pt-1">
                <v-col>
                  <v-chip
                    color="primary"
                    v-for="tag in uxProject.tags"
                    :key="tag"
                    text-color="primary"
                    outlined
                    class="ml-1"
                    small
                  >
                    <div v-if="tag.hasOnlyImage">
                      <v-avatar
                        size="70"
                        style="min-width:70px !important"
                        
                      >
                        <v-img
                          contain
                          aspect-ratio="1"
                          :lazy-src="tag.imageUrl"
                          :src="tag.imageUrl"
                        />
                      </v-avatar>
                    </div>
                    <div v-else>
                      <v-avatar
                        :tile="tag.hasTile"
                        :class="{ 'pa-1': tag.hasTile }"
                        left
                        class="ml-2"
                      >
                        <v-img
                          contain
                          height="30"
                          width="30"
                          :lazy-src="tag.imageUrl"
                          :src="tag.imageUrl"
                        />
                      </v-avatar>
                      {{tag.title}}
                    </div>
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="justify-space-between" v-else-if="projects == 2">
        <v-col cols="6" v-for="graphicDesignProject in graphicDesignProjects" :key="graphicDesignProject">
          <v-card class="mx-auto my-12 round-radius" max-width="374">
            <v-img
              contain
              aspect-ratio="1"
              height="250"
              class="ma-2"
              :lazy-src="graphicDesignProject.projectImageUrl"
              :src="graphicDesignProject.projectImageUrl"
            ></v-img>
            <v-card-title class="my-1 py-1">{{ graphicDesignProject.title }}</v-card-title>
            <v-divider class="mx-4 " color="#F9BE06"></v-divider>
            <v-card-text class="my-0 py-0">
              <div class="mb-2 text-subtitle-1">
                <v-btn
                  rounded
                  color="secondary"
                  dark
                  small
                  :disabled="!graphicDesignProject.demoUrl"
                  @click="goToDemo(graphicDesignProject.demoUrl)"
                >
                  Demo
                </v-btn>
              </div>

              <div>
                {{ graphicDesignProject.description }}
              </div>
            </v-card-text>
            <v-divider class="mt-6 mx-4" color="#F9BE06"></v-divider>

            <v-card-text>
              <v-row class="pt-1">
                <v-col>
                  <v-chip
                    color="primary"
                    v-for="tag in graphicDesignProject.tags"
                    :key="tag"
                    text-color="primary"
                    outlined
                    class="ml-1"
                    small
                  >
                    <div v-if="tag.hasOnlyImage">
                      <v-avatar
                        size="70"
                        style="min-width:70px !important"
                        
                      >
                        <v-img
                          contain
                          aspect-ratio="1"
                          :lazy-src="tag.imageUrl"
                          :src="tag.imageUrl"
                        />
                      </v-avatar>
                    </div>
                    <div v-else>
                      <v-avatar
                        :tile="tag.hasTile"
                        :class="{ 'pa-1': tag.hasTile }"
                        left
                        class="ml-2"
                      >
                        <v-img
                          contain
                          height="30"
                          width="30"
                          :lazy-src="tag.imageUrl"
                          :src="tag.imageUrl"
                        />
                      </v-avatar>
                      {{tag.title}}
                    </div>
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
import webProjects from "../json/webProjects.json";
import graphicDesignProjects from "../json/graphicDesignProjects.json";
import uxProjects from "../json/uxProjects.json";
export default {
  data() {
    return {
      projects: 0,
      webProjects,
      graphicDesignProjects,
      uxProjects
    };
  },
  methods: {
    goToDemo(demoUrl) {
      window.open(demoUrl, "_blank").focus();
    },
  },
};
</script>
<style lang="scss" scoped></style>
