<template>

  <transition
  appear
  enter-active-class='animate__animated animate__zoomInDown animate__fast'
  >
    <q-page>
      <p class='text-h4 q-pa-lg'> Houses and lands to buy </p>
      <q-space />
      <q-list class='q-py-xl row justify-center items-center'>
        <q-item class='col-xs-12 col-md-6 col-lg-4 col-xl-3' v-for='item in fakeHouses' :key='item.title'>
          <HouseCard :item='item' type='sell'/>
        </q-item>
      </q-list>
      
    </q-page>
  </transition>
</template>

<script>
import HouseCard from 'components/cards/HouseCard.vue'

export default {
  name: 'SellList',

  components: {
    HouseCard
  },

  data () {
    return {
      fakeHouses: [
        {
          img: 'https://silodrome.com/wp-content/uploads/2014/07/Tumbleweed-Tiny-House-Company.jpg',
          title: 'Tiny House',
          subtitle: 'A tiny place for you',
          price: "USD 20.000,00"
        },
        {
          img: 'https://static.thousandwonders.net/Traquair.House.original.36070.jpg',
          title: 'A big house',
          subtitle: 'Bonus: the goat',
          price: "USD 2.950.000,99"
        },
        {
          img: 'https://images.prismic.io/skylab%2Fbb772509-65f1-46af-8767-f466b833eb47_skylab_hoke_18.jpg?auto=compress,format',
          title: 'Nice wood house',
          subtitle: 'Beware of fire',
          price: "USD 340.560,11"
        },
        {
          img: 'https://hotelsrem.com/wp-content/uploads/2020/01/build-a-house-for-under-150k-new-britain-s-smallest-detached-house-which-is-just-13ft-wide-of-build-a-house-for-under-150k.jpg',
          title: 'Small but 2 floors',
          subtitle: 'If you prefer bricks',
          price: "USD 420.010,22"
        },
      ]
    }
  },

  props: ['items']
}
</script>
