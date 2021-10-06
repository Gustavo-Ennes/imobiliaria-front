<template>
<<<<<<< HEAD
  <section class='absolute-center loginCard'>
    <q-card square bordered>
      <q-card-section horizontal class='q-pa-md'>
        <p class='text-h4'>Login</p>
      </q-card-section>
      <q-card-section>

        <q-form id="loginForm" @submit.prevent="submitForm">
          <q-input v-model='email' label="e-mail" autofocus square  />
          <q-input v-model='password' label='password' class='q-mt-sm' type="password" square shadow-text="password"/>
        </q-form>
        
      </q-card-section>
      <q-card-section>
        <q-card-actions align='center'>
          <q-btn color='teal-10' align='center' class='full-width' unelevated>Login</q-btn>
        </q-card-actions>
      </q-card-section>
      <q-card-section>
        <q-card-actions align='center'>
          <q-btn type='submit' form='loginForm' color='red-4' align='center' flat unelevated>Forget password</q-btn>
        </q-card-actions>
      </q-card-section>
    </q-card>
=======
  <section class='relative-position'>
    <q-form @submit.prevent='submit'>

      <q-card square class='q-pa-md shadow-8 littleTransparent'>
        <q-card-section>
          <p class='text-h2 q-px-xs text-black-1'>Login</p>
        </q-card-section>
        <q-card-section>
          <q-input color="red-6" label="e-mail" />
          <q-input type='password' color="red-6" label="password" />
        </q-card-section>
        <q-card-actions align="center" class='q-px-md q-pt-xl'>
          <q-btn class='full-width' color="green-9" type='submit' label="Login"/>
          <q-btn class='full-width q-mt-lg' flat label='forget password'/>
        </q-card-actions>
      </q-card>

    </q-form>
>>>>>>> 190ccfe7912f9481a96841036654ee672af69419
  </section>
</template>

<script>
<<<<<<< HEAD
import { defineComponent } from 'vue'

export default defineComponent({
  name: "LoginCard",

  methods:{
    clearForm(){
      this.email = ''
      this.password = ''
    },
    submitForm(){

    }
  },

  data(){
    return {
      email: '',
      password: ''
    }
  }

})
</script>

<style scoped>

</style>
=======
export default {
  name: "LoginCard",

  methods:{
    submit(){

    }
  }
}
</script>

<style scoped>
.littleTransparent{
  background-color: rgba(255, 255, 255, .78);
}
</style>
>>>>>>> 190ccfe7912f9481a96841036654ee672af69419
