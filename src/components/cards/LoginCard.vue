<template>
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
  </section>
</template>

<script>
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