<template>
  <transition
  appear
  enter-active-class='animate__animated animate__zoomInDown animate__fast'
  >
    <q-page class='wrapper'>
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

<style lang="scss" scoped>

.wrapper{
  background-image: url('https://storage.googleapis.com/ennes/imobiliaria/register_background.jpg');
  background-repeat:no-repeat;
  background-size: cover;
  background-position: 100% 100%;
  // background-color: rgba(0, 0, 0, 0.5);
  padding: 5%;
  height: 100% !important;
}
</style>


