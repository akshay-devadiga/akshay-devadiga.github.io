<template>
  <v-layout class="app-layout">
    <v-container :class="pageClass" fluid full-height class="pt-0">
      <v-row
        justify="center"
        class="mb-5"
        :class="pageClassHeader"
        v-if="$vuetify.display.mdAndUp"
      >
        <v-col cols="auto" class="pt-6">
          <app-header />
        </v-col>
      </v-row>
      <v-row>
        <v-main class="align-center justify-center">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-card
                  flat
                  color="transparent"
                  class="pt-0"
                  :class="pageClassContent"
                >
                  <v-card-item class="pt-0">
                    <div class="bg-white pb-3" v-if="pageMeta">
                      <v-card-title class="text-center my-2"  :class="{
                      'text-body': $vuetify.display.smAndDown,
                      'text-h5': $vuetify.display.mdAndUp,
                    }">
                        {{ pageMeta.breadcrumbTitle }}
                      </v-card-title>
                      <v-card-subtitle class="text-center mb-5"   :class="{
                    'text-caption': $vuetify.display.smAndDown,
                    'text-body': $vuetify.display.mdAndUp,
                  }">
                        {{ pageMeta.breadcrumbDescription }}
                      </v-card-subtitle>
                    </div>
                    <slot />
                  </v-card-item>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-row>
      <v-row v-if="$vuetify.display.smAndDown">
        <app-navigation />
      </v-row>
    </v-container>
  </v-layout>
</template>
<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const pageClass = computed(() => {
  return {
    "app-layout__container__home-page-variant": route.path === "/",
    "app-layout__container": route.path != "/",
  };
});
const pageClassContent = computed(() => {
  return {
    "app-layout__container__content-wrapper__home-page-variant":
      route.path === "/",
    "app-layout__container__content-wrapper": route.path != "/",
  };
});
const pageClassHeader = computed(() => {
  return {
    "app-layout__container__header-wrapper__home-page-variant":
      route.path === "/",
    "app-layout__container__header-wrapper": route.path != "/",
  };
});

const pageMeta = computed(() => {
  let pageMetaData;
  switch (route.path) {
    case "/lab":
      pageMetaData = {
        breadcrumbTitle: "lab",
        breadcrumbDescription: "Here are some of my experiements",
      };
      break;
    case "/til":
      pageMetaData = {
        breadcrumbTitle: "til",
        breadcrumbDescription: "Small notes on the go",
      };
      break;
    case "/projects":
      pageMetaData = {
        breadcrumbTitle: "projects",
        breadcrumbDescription:
          "Here are a collection of projects I've worked on, including prototypes, side projects, hands-on projects, and contributions to open-source initiatives.",
      };
      break;
    case "/articles":
      pageMetaData = {
        breadcrumbTitle: "articles",
        breadcrumbDescription: "My thoughts, tutorials and much more",
      };
      break;
    default:
      pageMetaData = null;
  }
  //route.path
  return pageMetaData;
});
</script>
<style lang="scss" scoped>
.app-layout {
  min-height: 100vh;
  &__container {
    &__home-page-variant {
      background-image: linear-gradient(#a3bdae, #3185fc);
    }
    &__header-wrapper {
      background: #a3bdae;
      border-bottom-left-radius: 24px;
      border-bottom-right-radius: 24px;
      padding-top: 1rem;
      padding-bottom: 4rem;
      &__home-page-variant {
        padding-top: 1rem;
        padding-bottom: 4rem;
        background-image: none;
      }
    }
    &__content-wrapper {
      min-height: 100vh;
      background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
      background-color: transparent;
      background-image: linear-gradient(
          0deg,
          transparent 9%,
          rgba(49, 133, 252, 0.08) 10%,
          rgba(49, 133, 252, 0.08) 12%,
          transparent 3%,
          transparent 80%
        ),
        linear-gradient(
          90deg,
          transparent 9%,
          rgba(49, 133, 252, 0.08) 10%,
          rgba(49, 133, 252, 0.08) 12%,
          transparent 3%,
          transparent 80%
        );
      background-size: 50px 50px;
      &__home-page-variant {
        background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
        background-color: transparent;
        background-image: linear-gradient(
            0deg,
            transparent 9%,
            rgba(255, 255, 255, 0.08) 10%,
            rgba(255, 255, 255, 0.08) 12%,
            transparent 3%,
            transparent 80%
          ),
          linear-gradient(
            90deg,
            transparent 9%,
            rgba(255, 255, 255, 0.08) 10%,
            rgba(255, 255, 255, 0.08) 12%,
            transparent 3%,
            transparent 80%
          );
        background-size: 50px 50px;
      }
    }
  }
}
</style>
