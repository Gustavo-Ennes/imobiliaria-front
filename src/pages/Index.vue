<template>
  <q-page class="flex flex-center">

    <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
    appear
    >      

      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
        v-if='!isLoading'
      >
    </transition>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import {Loading, QSpinnerBall} from 'quasar'

export default defineComponent({
  name: 'PageIndex',

  data(){
    return{
      isLoading: true
    }
  },

  mounted(){
    this.showLoading()
    setTimeout(() => {this.hideLoading()}, 3000);
  },
  
  methods: {
    showLoading(){
      Loading.show({
        spinner: QSpinnerBall,
        spinnerColor: "deep-purple-14",
        spinnerSize: 80,
        message: "...loading",
        messageColor: "deep-purple-13" 
      })
    },
    hideLoading(){
      Loading.hide()
    }
  }


})
</script>

