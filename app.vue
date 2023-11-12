<template>
  <v-layout>
    <!-- <v-app-bar flat class="pa-0" height="50" elevation="0">
      <v-app-bar-title>AKD</v-app-bar-title>

      <v-btn>Articles</v-btn>
      <v-btn>Prototypes</v-btn>
      <v-btn>#TIL</v-btn>
      <v-spacer></v-spacer>
    </v-app-bar> -->
    <v-main class="align-center justify-center">
      <v-card class="main-content">
        <v-container max-height="200" class="pa-0" fluid>
          <v-row no-gutters>
            <v-col cols="12">
              <v-sheet class="pa-0 animation-container">
                <v-img
                  contain
                  src="animation/bg-top.svg"
                  class="animation-container__skyline"
                />
                <img
                  contain
                  src="animation/trainfinal.svg"
                  class="animation-container__train"
                />
                <v-img
                  contain
                  src="animation/bg.svg"
                  class="animation-container__bridge"
                />
                <v-img
                  cover
                  src="animation/bg-btm-2.svg"
                  class="animation-container__withinwater"
                />
                <div class="animation-container__water" />
              </v-sheet>
            </v-col>
          </v-row>
          <v-row justify="space-around">
            <v-col
              cols="12"
            >
                <router-view/>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-main>
  </v-layout>
</template>

<!-- https://www.figma.com/file/2YGLcY3IzjIeRwUFW9p0eH/Portfolio-Website?type=design&node-id=0-1&mode=design&t=fNwDHyim1UznwA8o-0 -->
<style lang="scss" scoped>
.animation-container {
  position: relative;
  &__skyline {
    width: 100%;
  }
  &__train {
    height: 23px;
    position: absolute;
    right: 0;
    top: 5.3rem;
    -webkit-animation-name: trainline;
    animation-name: trainline;
    -webkit-animation-duration: 40s;
    animation-duration: 40s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    transform: translateZ(0);
  }
  &__bridge {
  }
  &__withinwater {
    width: 100%;
  }
  &__water {
    width: 100%;
    background: #1da2d8;
    opacity: 0.66;
    position: absolute;
    top: 5rem;
    min-height: 70px;
    animation: waves 4s ease-in-out infinite;
  }
}
@keyframes trainline {
  0% {
    transform: translate3d(30vw, 0, 0);
  }
  100% {
    transform: translate3d(-115vw, 0, 0);
  }
}
@keyframes waves {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}

.main-content {
  background-image: radial-gradient(rgb(0, 0, 0) 10%, transparent 10%),
    radial-gradient(rgb(0, 0, 0) 10%, transparent 10%);
  background-position: 0px 0px, 4px 4px;
  background-size: 8px 8px;
  background-color: rgb(220, 219, 219);
}
</style>
