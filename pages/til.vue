<template>
<v-container fluid> 
  <div>TIL page</div>
      <v-row  justify="center"  class="app-footer-wrapper" v-if="$vuetify.display.mdAndUp">
        <v-col cols="auto">
          <app-footer :back-url="'/'" :back-text="'Home'"/>
        </v-col>
      </v-row>
</v-container>

</template>

<script setup></script>

<style lang="scss" scoped></style>
