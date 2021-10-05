<template>
  <q-page padding class='bg-teal-2'>
    <section class='absolute-center card'>
      <LoginCard />
    </section>
  </q-page>
</template>

<script>
import LoginCard from 'components/cards/LoginCard.vue'
export default {
  name: 'LoginPage',

  components:{
    LoginCard
  }
}
</script>
