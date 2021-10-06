<template>
  <router-view />
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'
import 'animate.css'

export default defineComponent({
  name: 'App',
  
  setup () {
    const $store = useStore()
    
    const user = computed({
      get: () => $store.state.user,
      set: val => {
        $store.commit('setUser', val)
      }
    })  

    return {
      user
    }
  }
})
</script>


