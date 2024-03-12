<template>
  <div>
    <v-container fluid>
      <v-row :class="{'mx-10':$vuetify.display.mdAndUp}" justify="center">
        <v-col  :cols="$vuetify.display.mdAndUp?8: 12">
    <v-chip-group
        v-model="selectedTags"
        column
        multiple
       class="justify-center"
        selected-class="text-white-lighten-4 bg-green"
        color="#F2EFE1"
      >
        <v-chip
          filter
          size="small"
          :value="tag"
          v-for="tag in allTags"
          :key="tag"
        >
          {{tag}}
        </v-chip>
      </v-chip-group>
      </v-col>
      </v-row>
      <v-row :class="{'mx-10':$vuetify.display.mdAndUp}" justify="center">
        <v-col v-for="til in filteredTILs" :key="til.title" :cols="$vuetify.display.mdAndUp?8: 12">
          <app-til-card
            :to="til._path"
            :url="''"
            :description="til.description"
            :title="til.title"
            :type="'til'"
            :reading-time="til.readingTime.text"
            :date="til.created_date"
          />
        </v-col>
      </v-row>
      <v-row  justify="center"  class="app-footer-wrapper" v-if="$vuetify.display.mdAndUp">
        <v-col cols="auto">
          <app-footer :back-url="'/'" :back-text="'Home'"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import {ref} from "vue";
const tils = await queryContent("/til")
  .sort({ date: -1 })
  .where({ _partial: false })
  .find();

const selectedTags = ref("");
const filteredTILs = computed(() => {
  let result = tils;
 if (selectedTags.value !== null && selectedTags.value.length > 0) {
    selectedTags.value.forEach(tag => {
      result = result.filter(til => {
        if (til.tags.length>0) {
          return til.tags.includes(tag);
        } else {
          return false;
        }
      });
    });
  }
  return result;
});
const allTags = [...new Set(tils.flatMap(til => til.tags))];
</script>

<style lang="scss" scoped></style>
