<template>
  <transition
  appear
  enter-active-class='animate__animated animate__zoomInDown animate__fast'
  >
    <q-page padding>
      <RegistrationCard :type='type' />
    </q-page>
  </transition>
</template>

<script>
import RegistrationCard from 'components/cards/Registration.vue'

export default {
  name: "RegistrationPage",

  components:{
    RegistrationCard
  },

  props: ['type']
}
</script>

<style>

</style>