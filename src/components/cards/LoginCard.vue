<template>
  <q-form @submit.prevent='submit'>

    <q-card>
      <q-card-section>
        <p class='text-h2 teal-8'>Login</p>
      </q-card-section>
      <q-card-section>
        <q-input color="red-6" label="e-mail" />
        <q-input type='password' color="red-6" label="e-mail" />
      </q-card-section>
      <q-card-actions>
        <q-btn color="green-9" type='submit' />
        <q-btn flat label='forget password' />
      </q-card-actions>
    </q-card>

  </q-form>
</template>

<script>
export default {
  name: "LoginCard",

  methods:{
    submit(){

    }
  }
}
</script>

<style>

</style>