<template>
  <v-app-bar flat class="mt-9 app-header__nav-bar px-12">
    <template>
      <v-container fluid class="pa-0">
        <v-row align="center">
          <app-button
            url="images/navigation/about.svg"
            :size="24"
            image-alt-text="About"
            button-text="About"
          />
          <app-button
            url="images/navigation/projects.svg"
            :size="24"
            image-alt-text="Projects"
            button-text="Projects"
          />
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>

          <div class="app-header__nav-bar__center-container">
            <v-card
              class="ma-0 pa-0 app-header__nav-bar__center-container__logo"
              flat
            >
              <v-card-title
                class="ma-0 pa-5 app-header__nav-bar__center-container__logo__title"
              >
                AD
              </v-card-title></v-card
            >
          </div>
          <v-spacer></v-spacer>
          <app-button
            url="images/navigation/articles.svg"
            :size="24"
            image-alt-text="Articles"
            button-text="Articles"
          />
          <app-button
            url="images/navigation/blog.svg"
            :size="24"
            image-alt-text="Blog"
            button-text="Blog"
          />
          <app-button
            url="images/navigation/resume.svg"
            :size="24"
            image-alt-text="Resume"
            button-text="Resume"
          />
        </v-row>
      </v-container>
    </template>
  </v-app-bar>
</template>
<style lang="scss" scoped>
.app-header {
  &__nav-bar {
    overflow: visible;
    border-bottom: 3px solid black !important;
    &__center-container {
      position: relative;
      width: 20rem;
      background: red;
      &__logo {
        position: absolute;
        top: -52px;
        left: 50%;
        transform: translate(-50%);
        &__title {
          color: #000;
          font-family: Roboto;
          font-size: 2.5rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 1.25px;
        }
        border-radius: 12px 12px 2px 2px;
        border: 3px solid #000;
        background: #91d5ff;
      }
    }
  }
}
</style>
