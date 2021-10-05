<template>
  <q-page padding class='page'>
    <LoginCard />
  </q-page>
</template>

<script>
import LoginCard from '../components/cards/LoginCard.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',

  components: {
    LoginCard
  }
  
})
</script>

<style scoped>
.page{
  height: 100% !important;
  width: 100%;
  position: relative;
}
</style>
