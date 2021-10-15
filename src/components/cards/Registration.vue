<template>
  <q-card square class='q-pa-md shadow-8 littleTransparent regCard'>
    <q-card-section>
      <p class='text-h4 q-px-xs text-black-1'>Registration: {{ type }}</p>
    </q-card-section>
    <q-card-section>

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        @validation-error="errorAnimation"
      >
        <q-input
          filled
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[ 
          val => val && val.length > 0 || 'Please type something',
          val => val.split(' ').length > 1 || 'Name AND surname'
          ]"
        />

        <q-input
          filled
          v-model="phone"
          label="Your phone number"
          mask="(##) #####-####"
          hint="With area code"
          lazy-rules
          :rules="[
            val => val && val.length == 15 || 'Your phone number must have 11 digits'
          ]"
        />

        <q-input
          filled
          v-model="username"
          label="Your username *"
          hint="Choose an username"
          lazy-rules
          :rules="[ val => (val && val.length > 0 && isUniqueUsername()) || 'Please username is invalid']"
        />

        <q-input
          filled
          v-model="addressStreet"
          label="Your address street *"
          hint="The name of your street or avenue, etc."
          lazy-rules
          :rules="[ val => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          v-model="addressComplementation"
          label="Your address complementation"
          hint="The block, apartment number, etc."
        />

        <q-input
          filled
          v-model="addressReference"
          label="Your address reference"
          hint="Some signigicant place near you"
        />

        <q-input
          filled
          v-model="addressDistrict"
          label="Your district or state *"
          hint="The name of your district or state"
          lazy-rules
          :rules="[ val => (val && val.length > 0) || 'Please type a valid district name']"
        />

        <q-input
          filled
          v-model="addressCity"
          label="Your city name *"
          hint="The name of the city which you live"
          lazy-rules
          :rules="[ val => (val && val.length > 0) || `Please type a city's name`]"
        />

        <q-input
          filled
          v-model="addressZip"
          label="Your city's zipcode"
          hint="The zipcode of your area"
          mask='##.###-###'
          lazy-rules
          :rules="[ val => (val && val.length === 10) || `This zipcode is invalid`]"
        />

        <q-toggle 
        v-model="accept" 
        label="I accept the license and terms" 
        lazy-rules
        :rules='[
          val => true || "Você tem que aceitar os termos se quiser se cadastrar"
        ]'/>

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>


    </q-card-section>
  </q-card> 
</template>

<script>


export default {
  name: "Registration",

  data() {
    return {
      phone: '',
      name: '',
      password: '',
      confirmPassword: '',
      username: '',
      addressStreet: '',
      addressNumber: '',
      addressComplementation: '',
      addressReference: '',
      addressDistrict: '',
      addressState: '',
      addressCity: '',
      addressZip: '',
      accept: false
    }
  },

  methods:{
    resetAnimation(){
      const el = document.querySelector('.regCard')
      el.classList.add('animate__animated', 'animate__bounce', 'animate_duration-200ms')
      el.addEventListener('animationend', () => {
        el.classList.remove('animate__animated', 'animate__bounce',  'animate__duration-200ms')
      })
    },
    submitAnimation () {
      const el = document.querySelector('.regCard')
      el.classList.add('animate__animated', 'animate__lightSpeedOutLeft', 'animate_duration-200ms')
      el.addEventListener('animationend', () => {
        el.classList.remove('animate__animated', 'animate__lightSpeedOutLeft',  'animate__duration-200ms')
      })
    },
    errorAnimation() {
      const el = document.querySelector('.regCard')
      el.classList.add('animate__animated', 'animate__tada', 'animate_duration-.1s')
      el.addEventListener('animationend', () => {
        el.classList.remove('animate__animated', 'animate__tada',  'animate__duration-.1s')
      })
    },
    isUniqueUsername () {
      return true
    },
    onSubmit(){
      this.submitAnimation()
      this.$router.push({name: 'index'})
    },
    onReset(){
      this.resetAnimation()  
      Object.keys(this.$data).forEach(key => {
        this.$data[key] = key !== 'accept' ? '' : false
      })    
    },
    phoneValidation (val){
      let reg = /^(\([0-9]{2}\)) [0-9]{4,5}-[0-9]{4}/;
      return val.match(reg)
    },
  },
  
  props: ['type']

}
</script>

<style scoped>

.regCard{
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;
  margin-bottom: 35px;
}

</style>