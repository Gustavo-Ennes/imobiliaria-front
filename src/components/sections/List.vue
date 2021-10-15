<template>
  <q-carousel
    v-model="whichOne"
    transition-prev="scale"
    transition-next="scale"
    swipeable
    animated
    control-color="white"
    navigation
    padding
    infinite
    :autoplay="1500"
    class="full-width fullHeight bg-primary text-white shadow-10"
  >
    <q-carousel-slide v-for='house in fakeHouses' :key='house.title' :img-src="house.img" :name="house.title" class="column no-wrap flex-center">
      <q-icon name="house" size="56px" />
      <div class="q-mt-md text-center">
        <p class='lead'>{{ house.title }}</p>
        <small> {{ house.subtitle }} </small>
      </div>
    </q-carousel-slide>
    
  </q-carousel>
</template>

<script>
export default {
  name: 'List',
  
  data () {
    return {
      fakeHouses: [
        {
          img: 'https://silodrome.com/wp-content/uploads/2014/07/Tumbleweed-Tiny-House-Company.jpg',
          title: 'Tiny House',
          subtitle: 'A tiny place for you'
        },
        {
          img: 'https://static.thousandwonders.net/Traquair.House.original.36070.jpg',
          title: 'A big house',
          subtitle: 'Bonus: the goat'
        },
        {
          img: 'https://images.prismic.io/skylab%2Fbb772509-65f1-46af-8767-f466b833eb47_skylab_hoke_18.jpg?auto=compress,format',
          title: 'Nice wood house',
          subtitle: 'Beware of fire'
        },
        {
          img: 'https://hotelsrem.com/wp-content/uploads/2020/01/build-a-house-for-under-150k-new-britain-s-smallest-detached-house-which-is-just-13ft-wide-of-build-a-house-for-under-150k.jpg',
          title: 'Small but 2 floors',
          subtitle: 'If you prefer bricks'
        },
      ],
      lorem: 'fuck you',
      whichOne: 'Tiny House'
    }
  }
}
</script>
