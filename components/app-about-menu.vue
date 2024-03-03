<template>
  <v-card flat color="transparent" class="mx-auto pa-1 app-about-menu">
    <v-list bg-color="transparent" class="app-about-menu__list">
      <v-list-item
        v-for="(item) in list"
        :key="item.id"
        :value="item"
        class="my-1 app-about-menu__list__item"
        active-class="app-about-menu__list__item__active"
        rounded="xl"
        :active="activeItem === item.id"
        @click="onItemClick(item)"
      >
        <template v-slot:prepend>
          <v-avatar color="transparent" rounded="0">
            <v-img
              :src="item.url"
              :height="size"
              contain
              :alt="item.imageAltText"
            ></v-img>
          </v-avatar>
        </template>
        <div>{{item.buttonText}} </div>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script setup>
const emit = defineEmits(['onItemClick'])
const props = defineProps({
  list: {
    type: Array,
    default: [],
  },
  size: {
    type: Number,
    default: 24,
  },
  activeItemIndex:{
    type: Number,
    default: 0,
  }
});
import {ref} from "vue";
const isItemClicked = ref(false);
const selectedItemIndex = ref(props.activeItemIndex);
const activeItem = computed(()=>Number(isItemClicked.value? selectedItemIndex.value :props.activeItemIndex))

function onItemClick(payload){
 isItemClicked.value = true;
 selectedItemIndex.value = payload.id
 emit('onItemClick',payload.targetId)
}
</script>
<style lang="scss" scoped>
:deep(.v-list-item__overlay) {
  background: transparent !important;
}
.app-about-menu {
  &__list {
    &__item {
      border-radius: 20px;
      background: #e7e7e7;
      padding: 0px;
      &__active {
        border: 3px solid #A3BDAE;
        font-weight: 700 !important;
      }
    }
  }
}
</style>
