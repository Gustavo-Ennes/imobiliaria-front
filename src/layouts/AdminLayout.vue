<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Imobiliária
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/" label="exit" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      
        <q-scroll-area class="fit">
          <q-list>
              <q-item v-for="item in items" :key='item.title' :to='{name: item.to}'> 
                
                <q-item-section>
                  <q-item-label> {{ item.title }} </q-item-label>
                </q-item-section>

            </q-item>
          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "AdminLayout",

  data(){
    return {
      items: [
        {
          title: "Tenants",
          icon: "person_pin",
          to: "AdminTenantsPage"
        },
        {
          title: "Owners",
          icon: "person_pin",
          to: "AdminOwnersPage"
        },
        {
          title: "Lands",
          icon: "crop_portrait",
          to: "AdminLandsPage"
        },
        {
          title: "Properties",
          icon: "maps_home_work",
          to: "AdminPropertiesPage"
        }
      ]
    }
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>