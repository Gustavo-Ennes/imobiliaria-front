<template>
  <transition
  appear
  enter-active-class='animate__animated animate__zoomInDown animate__fast'
  >
    <q-page padding>
      <h1 class='text-h2'>Hello username!</h1>
    </q-page>
  </transition>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'TenantPage',
  
  computed:{
    store(){
      return useStore()
    }
  }
}
</script>
