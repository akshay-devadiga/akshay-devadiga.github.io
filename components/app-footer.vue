<template>
  <v-footer class="bg-transparent">
    <div class="d-flex justify-center mb-6 pl-2 pr-1 py-2  app-footer">
      <app-button
        url="images/back.svg"
        :size="20"
        image-alt-text="Mail"
        to="/"
        button-text="Go to Articles"
        flat
        class="bg-transparent px-0"
      />
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
       <app-button
        url="images/message.svg"
        :size="20"
        href="https://airtable.com/appgwOfBTgG3Ur8va/pagNMZwmcett1X44P/form"
             :show-left-button-text="true"
        flat
        button-text="Send me a message"
        class="bg-transparent px-0"
      />
    </div>
  </v-footer>
</template>
<style lang="scss" scoped>
.app-footer {
  border-radius: 24px;
  background: #F2EFE1;
}
</style>
