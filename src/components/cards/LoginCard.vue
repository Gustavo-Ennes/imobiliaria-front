<template>
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
  </section>
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

<style scoped>
.littleTransparent{
  background-color: rgba(255, 255, 255, .78);
}
</style>
