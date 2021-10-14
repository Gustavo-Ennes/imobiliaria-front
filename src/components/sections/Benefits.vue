<template>
  <div class=''>
    <q-list class='row full-width wrap justify-center items-stretch content-stretch'>
      <q-item v-for='benefit in benefits' :key='benefit.icon' class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>

        <BenefitCard 
          :icon='benefit.icon' 
          :title='benefit.title' 
          :subtitle='benefit.subtitle' 
          :btn='benefit.btn' 
        />

      </q-item>
    </q-list>
  </div>
</template>

<script>
import BenefitCard from 'src/components/cards/BenefitCard.vue'

export default {
  name: 'Benefits',

  components: {
    BenefitCard
  },

  data () {
    return{
      benefits: [
        {
          icon: 'hands',
          title: 'Do you want to sell you property?',
          subtitle: 'Advertise with us! We sell and rent properties and lands everyday, the next can be yours!',
          btn: {
            title: 'Fill your register',
            path: '',
          }
        },
        {
          icon: 'thumb',
          title: 'Your ideal property',
          subtitle: 'Here you can do an advance search for many details',
          btn: {
            title: 'Advanced search',
            path: '',
          }
        },
        {
          icon: 'couch',
          title: 'From your home',
          subtitle: "Send documentations from your home and don't spend any more time",
          btn: {
            title: 'Sign up or login',
            path: ''
          }
        }
      ]
    }
  },

  setup () {
    return {}
  }
}
</script>
