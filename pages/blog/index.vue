<template>
  <div>
    <v-container fluid>
      <v-row class="mx-10" justify="center">
        <v-col
          v-for="blog in blogPosts"
          :key="blog.title"
          :cols="4"
        >
          <app-article-card :to="blog._path" :url="''" :description="blog.description" :title="blog.title" :type="'blog'" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const blogPosts = await queryContent("/blog")
  .sort({ date: -1 })
  .where({ _partial: false })
  .find();
</script>

<style lang="scss" scoped></style>
