<template>
<<<<<<< HEAD
  <q-layout>
    
    <q-page-container>
      <router-view></router-view>
    </q-page-container>

  </q-layout>
</template>
=======
  <q-layout view="hHh Lpr fFf"> 
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'EmptyLayout',

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
>>>>>>> 190ccfe7912f9481a96841036654ee672af69419
