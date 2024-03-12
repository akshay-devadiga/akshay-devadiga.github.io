<template>
  <v-card class="app-certificate-card">
  <div class="px-2 pt-2">
    <v-img
   class="app-certificate-card__image"
      :src="url"
      contain
    >
    </v-img>
  </div>
    <v-sheet class="pa-2">
      <v-container class="bg-grey-lighten-2 app-certificate-card__text" fluid>
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
<style lang="scss" scoped>
.app-certificate-card{
  border-radius: 18px;
  &__text{
border-radius: 10px;
overflow: hidden;
  }
}
</style>
