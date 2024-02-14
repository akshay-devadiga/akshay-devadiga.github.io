<template>
  <v-container fluid class="mt-9 app-header__nav-bar px-12 py-2">
    <v-row align="center">
      <app-button
        url="images/navigation/about.svg"
        :size="24"
        image-alt-text="About"
        button-text="About"
        to="/"
        flat
      />
      <app-button
        url="images/navigation/projects.svg"
        :size="24"
        image-alt-text="Projects"
        to="/projects"
        button-text="Projects"
        flat
      />
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
        to="/articles"
        image-alt-text="Articles"
        button-text="Articles"
        flat
      />
      <app-button
        url="images/navigation/blog.svg"
        :size="24"
        to="/blog"
        image-alt-text="Blog"
        button-text="Blog"
        flat
      />
    
    </v-row>
  </v-container>
</template>
<script setup>
function showResume(){
  navigateTo('https://docs.google.com/document/d/1xQNvkxsylmOamG-3Rv90p2aqnMdxwvtSZV3y4h9Lx6E/edit#heading=h.z39vyjy1pb9r', {
  external: true,
  open: {
    target: "_blank",
  },
});
}
</script>
<style lang="scss" scoped>
.app-header {
  &__nav-bar {
    overflow: visible;
    border-bottom: 3px solid black !important;
    background: white;
    &__center-container {
      position: relative;
      width: 20rem;
      margin-top:4rem;
      &__logo {
        position: absolute;
        bottom: 1px;
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
