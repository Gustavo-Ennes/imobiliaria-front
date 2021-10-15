<template>
  <q-layout view="hHh lpR fFf">

    <Navbar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />
    <Institucional />

  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import Navbar from 'components/sections/Navbar.vue'
import Footer from 'components/sections/Footer.vue'
import Institucional from 'components/sections/Institucional.vue'

export default defineComponent({
  name: 'IndexLayout',
  
  components: {
    Navbar,
    Footer,
    Institucional
  },

})
</script>
