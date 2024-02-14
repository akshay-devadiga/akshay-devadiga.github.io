<template>
  <div>
    <v-container fluid>
      <v-row class="mx-10" justify="center">
        <!-- <v-col v-for="project in projectsData" :key="project.id" :cols="4">
    
        </v-col> -->
<ContentList path="/lab" v-slot="{ list }">
        <ContentQuery
          v-for="item in list"
          :key="item._path"
          :path="item._path"
          find="one"
          v-slot="{ data }"
        >
        {{data.title}}
          <!-- <ContentRenderer>
            <ContentRendererMarkdown :value="data" />
          </ContentRenderer> -->
        </ContentQuery>
      </ContentList>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>
