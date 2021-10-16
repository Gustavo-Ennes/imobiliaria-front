<template>
  <section class='relative-position'>

    <!-- alert -->
    <div class="q-pa-md">
      <q-btn
      color="red" 
      type='negative'
      v-if='showNotification' 
      @show="showNotif" 
      label="Wrong username or password" 
      classes='full-width'
      icon='error'
      
      />
    </div>

    <q-form class='q-ma-lg'>

      <q-card square class='q-pa-md shadow-8 littleTransparent maxWidth'>
        <q-card-section>
          <p class='text-h2 q-px-xs text-black-1'>Login</p>
        </q-card-section>
        <q-card-section>

          <q-input
          v-model='username' 
          color="red-6" 
          label="e-mail" 
          aria-autocomplete="false"
          :rules='validation'
          />

          <q-input 
          v-model='password' 
          type='password'
          color="red-6"
          label="password"
          autocomplete='false'
          :rules='validation'
          />

        </q-card-section>
        <q-card-actions align="center" class='q-px-md q-pt-xl'>
          <q-btn class='full-width' color="green-9" @click='submit' label="Login"/>
          <q-btn class='full-width q-mt-lg' flat label='forget password'/>
        </q-card-actions>
      </q-card>

    </q-form>
  </section>
</template>

<script>

import { useQuasar } from 'quasar'
import getRouter from '../../router/index'

export default {
  name: "LoginCard",

  data(){
    return {
      path: '',
      username: '',
      password: '',
      type: 'admin',
      defaultUsername: "kratos",
      defaultPassword: '12345',
      showNotification: false,
      validation: [
        value => value.length >= 5 || "At least 5 characters in this field" 
      ]
    }
  },

  methods:{
    
    clearForm() {
      this.password = ''
    },

    submit(){
      const router = getRouter({null: null})

      if(this.username == this.defaultUsername && this.password == this.defaultPassword){
        this.path = this.$store.state.redirectTo
        this.$store.commit("setUser", "kratos")

        if(!this.path){
          switch(this.type){
            case 'admin':
              this.path = '/dash/admin'
              break
            case 'tenant':
              this.path = '/dash/tenant'
              break
            case 'owner':
              this.path = '/dash/owner'
              break;
            default:
              this.path = ''
              break
          }
        }
        console.log(`path: ${this.path}`)
        router.push(this.path)


      } else{
        this.showNotification = true
        setTimeout(() => {this.showNotification = false}, 1000)
      }

      this.clearForm()
    }
  },

  mounted () {
    
  },

  setup () {
    const $q = useQuasar()
    
    return {
      
      showNotif () {
        $q.notify({
          message: 'Wrong password or username.',
          color: 'red',
          icon: 'error',
          classes: 'full-width',
          timeout: '1000'
        })
      }
    }
  }

}
</script>

<style scoped>
.littleTransparent{
  background-color: rgba(255, 255, 255, .78);
}
.maxWidth{
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}
</style>
