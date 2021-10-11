<template>
  <q-card square class='q-ma-md q-pa-sm shadow-8 littleTransparent'>
    <q-card-section>
      <p class='text-h4 q-px-xs text-black-1'>Registration: {{ type }}</p>
    </q-card-section>
    <q-card-section>

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
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
          @click="onSubmit"
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

        <q-toggle v-model="accept" label="I accept the license and terms" />

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
    isUniqueUsername () {
      return false
    },
    onSubmit(){
      console.log(`phone: ${this.phone.length}`)
    },
    onReset(){
      
    },
    phoneValidation (val){
      let reg = /^(\([0-9]{2}\)) [0-9]{4,5}-[0-9]{4}/;
      return val.match(reg)
    },
  },
  
  props: ['type']
}
</script>

<style>

</style>