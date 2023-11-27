<template>
  <v-btn :to="to" :flat="flat" :v-ripple="false">
    <template v-slot:prepend>
      <v-avatar color="transparent" rounded="0">
        <v-img :src="url" :height="size" contain :alt="imageAltText"></v-img>
      </v-avatar>
    </template>
    <div v-if="!hideButtonText">{{ buttonText }}</div>
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
  flat: {
    type: Boolean,
    default: false,
  },
});
</script>
