<template>
  <!-- template has navbar and footer -->
  <q-page>
    <section class='fullHeight search'>
      <Search />
    </section>
    <section class='fullHeight list'>
      <List />
    </section>
    <section class=''>
      <Benefits />
      <Location />
    </section>
  </q-page>
</template>

<script>
import Search from 'components/cards/SearchCard.vue'
import List from 'components/sections/List.vue'
import Benefits from 'components/sections/Benefits.vue'
import Location from 'components/sections/Location.vue'

export default {
  name: 'Index',

  components: {
    Search,
    List,
    Benefits,
    Location
  },

  mounted () {
    const els = document.querySelectorAll(".fullHeight")
    els.forEach(el => {
      el.style.setProperty('height', `${window.innerHeight}px !important`)
    })
  }
}
</script>

<style lang="scss" scoped>
.search{  
  background-image: url('https://storage.googleapis.com/ennes/imobiliaria/background.webp');
    background-repeat:no-repeat;
  background-size: cover;
  background-position: 66% center;
  // margin-top: 1px;
}
.list{  
  background-image: url('https://storage.googleapis.com/ennes/imobiliaria/background.webp');
  background-repeat:no-repeat;
  background-size: cover;
  background-position: 66% center;
}
</style>


