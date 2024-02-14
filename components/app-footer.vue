<template>
  <v-footer class="pa-0 bg-transparent">
    <v-container fluid>
    <v-row align="center" justify="center">
     <v-col cols="auto"> Built using &nbsp;<strong>Vuetify</strong> </v-col>
      <v-col cols="auto"> 
        <app-button
        url="images/mail.svg"
        :size="20"
        image-alt-text="Mail"
        to="/projects"
        hide-button-text
        flat
         class="bg-transparent px-0"
      />
        <app-button
        url="images/linkedin.svg"
        :size="20"
        image-alt-text="LinkedIn"
        to="/projects"
        hide-button-text
        flat
         class="bg-transparent px-0"
      />
        <app-button
        url="images/github.svg"
        :size="20"
        image-alt-text="Mail"
        to="/projects"
        :hide-button-text="true"
        flat
        class="bg-transparent px-0"
      />
      </v-col>
    </v-row>
    </v-container>
  </v-footer>
</template>
