<template>
  <div class="d-flex justify-center app-header-wrapper">
    <div class="app-header">
      <app-button
        url="images/navigation/about.svg"
        :size="24"
        image-alt-text="About"
        button-text="About"
        to="/"
        flat
        class="mr-1"
      />
      <app-button
        url="images/navigation/articles.svg"
        :size="24"
        to="/articles"
        image-alt-text="Articles"
        button-text="Articles"
        flat
        class="mx-1"
      />
      <app-button
        url="images/navigation/lab.svg"
        :size="24"
        to="/lab"
        image-alt-text="Lab"
        button-text="Lab"
        flat
      />
      <app-button
        url="images/navigation/view-list.svg"
        :size="24"
        to="/til"
        image-alt-text="TIL"
        button-text="TIL"
        flat
        class="mx-1"
      />
      <app-button
        url="images/navigation/projects.svg"
        :size="24"
        image-alt-text="Projects"
        to="/projects"
        button-text="Projects"
        flat
        class="ml-1"
      />
    </div>
  </div>
</template>
<script setup>
function showResume() {
  navigateTo(
    "https://docs.google.com/document/d/1xQNvkxsylmOamG-3Rv90p2aqnMdxwvtSZV3y4h9Lx6E/edit#heading=h.z39vyjy1pb9r",
    {
      external: true,
      open: {
        target: "_blank",
      },
    }
  );
}
</script>
<style lang="scss" scoped>
.app-header-wrapper {
  .app-header {
    padding: 0.3rem;
  }
  background: white;
  border-radius: 24px;
  overflow: hidden;
}
</style>
