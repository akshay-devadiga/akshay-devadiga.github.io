<template>
  <v-footer class="bg-transparent">
   <v-row v-if="$vuetify.display.smAndDown" justify="center" align="center" class="bg-footer-item">
   <v-col cols="auto">
      <app-button
        url="images/back.svg"
        :size="20"
        image-alt-text="Mail"
        :to="backUrl"
        :button-text="backText"
        flat
        class="bg-transparent px-0"
        v-if="!hideBackBtn"
      /></v-col>
       <v-col cols="auto">
      <app-button
        url="images/mail.svg"
        :size="20"
        image-alt-text="Mail"
        href="mailto:akshaydevadiga4@gmail.com"
        target="_blank"
        hide-button-text
        flat
        class="bg-transparent px-0"
      /></v-col>
       <v-col cols="auto">
      <app-button
        url="images/linkedin.svg"
        :size="20"
        image-alt-text="LinkedIn"
        hide-button-text
        flat
        href="mailto:johndoe@fakeemail.com"
        target="_blank"
        class="bg-transparent px-0"
      /></v-col>
       <v-col cols="auto" >
      <app-button
        url="images/github.svg"
        :size="20"
        image-alt-text="Mail"
        href="https://github.com/akshay-devadiga"
        target="_blank"
        :hide-button-text="true"
        flat
        class="bg-transparent px-0"
      /></v-col>
       <v-col cols="auto">
       <app-button
        url="images/message.svg"
        :size="20"
        target="_blank"
        href="https://airtable.com/appgwOfBTgG3Ur8va/pagNMZwmcett1X44P/form"
             :show-left-button-text="true"
        flat
        button-text="Send me a message"
      />
    </v-col>
   </v-row>
    <div v-else class="d-flex justify-center mb-6 pl-2 pr-1 py-1  app-footer">
      <app-button
        url="images/back.svg"
        :size="20"
        image-alt-text="Mail"
        :to="backUrl"
        :button-text="backText"
        flat
        class="bg-transparent px-0"
        v-if="!hideBackBtn"
      />
      <app-button
        url="images/mail.svg"
        :size="20"
        image-alt-text="Mail"
        href="mailto:akshaydevadiga4@gmail.com"
        target="_blank"
        hide-button-text
        flat
        class="bg-transparent px-0"
      />
      <app-button
        url="images/linkedin.svg"
        :size="20"
        image-alt-text="LinkedIn"
        hide-button-text
        flat
        href="mailto:johndoe@fakeemail.com"
        target="_blank"
        class="bg-transparent px-0"
      />
      <app-button
        url="images/github.svg"
        :size="20"
        image-alt-text="Mail"
        href="https://github.com/akshay-devadiga"
        target="_blank"
        :hide-button-text="true"
        flat
        class="bg-transparent px-0"
      />
       <app-button
        url="images/message.svg"
        :size="20"
        target="_blank"
        href="https://airtable.com/appgwOfBTgG3Ur8va/pagNMZwmcett1X44P/form"
             :show-left-button-text="true"
        flat
        button-text="Send me a message"
        class="bg-transparent px-0"
      />
    </div>
  </v-footer>
</template>
<script setup>
const props = defineProps({
  backText: {
    type: String,
    default: "",
  },
  backUrl: {
    type: String,
    default: "",
  },
  hideBackBtn:{
    type:Boolean,
    default: false
  }
});
</script>
<style lang="scss" scoped>
.bg-footer-item {
  border-radius: 12px;
  background: #F2EFE1;
}
.app-footer {
  border-radius: 24px;
  background: #F2EFE1;
}
</style>
