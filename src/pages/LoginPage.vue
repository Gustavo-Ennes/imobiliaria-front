<template>
  <q-page padding>
    <section class='absolute-center'>
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
