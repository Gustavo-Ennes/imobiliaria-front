<template>
  <transition
  appear
  enter-active-class='animate__animated animate__zoomInDown animate__fast'
  >
    <q-page padding class='bg-teal-2'>
      <section class='absolute-center card'>
        <LoginCard />
      </section>
    </q-page>
  </transition>
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
