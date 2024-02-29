<template>
  <v-btn :to="to" :flat="flat" :v-ripple="false" class="px-3" rounded :href="href">
    <template v-slot:prepend v-if="!showLeftButtonText">
      <v-avatar color="transparent" rounded="0">
        <v-img :src="url" :height="size" contain :alt="imageAltText"></v-img>
      </v-avatar>
    </template>
       <template v-slot:append v-else>
      <v-avatar color="transparent" rounded="0">
        <v-img :src="url" :height="size" contain :alt="imageAltText"></v-img>
      </v-avatar>
    </template>
    <div v-if="!hideButtonText" class="button-text">{{ buttonText }}</div>
  </v-btn>
</template>
<script setup>
defineProps({
  url: {
    type: String,
    default: "",
  },
  size: {
    type: Number,
    default: 24,
  },
  imageAltText: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "",
  },
  hideButtonText: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: "",
  },  
  href: {
    type: String,
    default: "",
  },
  flat: {
    type: Boolean,
    default: false,
  },
  showLeftButtonText: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
.button-text{
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  text-transform: capitalize;
}
</style>