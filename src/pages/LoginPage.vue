<template>
<<<<<<< HEAD
  <q-page padding class='page'>
    <LoginCard />
=======
  <q-page padding class='bg-teal-2'>
    <section class='absolute-center card'>
      <LoginCard />
    </section>
>>>>>>> 190ccfe7912f9481a96841036654ee672af69419
  </q-page>
</template>

<script>
<<<<<<< HEAD
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
=======
import LoginCard from 'components/cards/LoginCard.vue'
export default {
  name: 'LoginPage',

  components:{
    LoginCard
  }
}
</script>
>>>>>>> 190ccfe7912f9481a96841036654ee672af69419
