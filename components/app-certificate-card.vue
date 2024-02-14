<template>
  <v-card>
  <div class="px-2 pt-2">
    <v-img
      :src="url"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
      contain
    >
    </v-img>
  </div>

    <v-sheet class="pa-2">
      <v-container class="bg-grey-lighten-2" fluid>
        <v-row align="center">
          <v-col cols="1">
            <v-avatar size="20">
              <v-img src="images/about/info.svg" contain />
            </v-avatar>
          </v-col>
          <v-col cols="11">
            <p class="text-caption">{{ title }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-card>
</template>
<script setup>
defineProps({
  url: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>
