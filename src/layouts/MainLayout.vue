<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar >
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title
          >Sistema de Seguimiento de Proyectos Puno</q-toolbar-title
        >

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>

    </q-header>

    <div class="side">
      <q-drawer v-model="leftDrawerOpen" class="bg-light-blue-9 text-white" show-if-above bordered>
        
        <!-- class="bg-primary text-white" show-if-above bordered  -->



        <q-list>
          <q-item-label header> <b>Seguimiento Proyecto </b> </q-item-label>
          <q-separator spaced inset vertical dark />
          <!-- 
  <div class="avatar">
    <q-avatar size="42px" class="q-pa-sm ">
      <img src="https://cdn-icons-png.flaticon.com/128/706/706816.png" />
      <div class="text-weight-bold">Razvan Stoenescu</div>
      <div color="black">@rstoenescu</div>
    </q-avatar>
  </div> -->

          <!-- <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 100px"> -->
          <div class="avatar">
            <q-img
              class="absolute-top bg-light-blue-9"
              src="https://cdn.quasar.dev/img/material.png"
              style="height: 150px"
            >
              <div class="absolute-bottom bg-transparent">
                <q-avatar size="56px" class="q-mb-sm">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140051.png"
                  />
                </q-avatar>
                <div class="text-weight-bold">Usuario Empleado</div>
                <div>@useremployed</div>
              </div>
            </q-img>
          </div>

          <EssentialLink 
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-drawer>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="sass" scoped>
.avatar
  margin-bottom: 120px

.side
    background-color: green
</style>

<script>
import { computed, defineComponent, ref } from "vue";
//import { useStore } from "vuex";

import EssentialLink from "components/EssentialLink.vue";
import { linksList } from "../router/link-list";
import { useCounterStore } from "src/stores/example-store";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    //const store = useStore();
    const leftDrawerOpen = ref(false);

    return {
      // sideMenuOpen: computed(() => store.getters['ui/isSideMenuOpen'])
      // toggleSideMenu() {
      //   store.commit('ui/toggleSideMenu')

      linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
