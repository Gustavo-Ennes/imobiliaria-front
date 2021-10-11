<template>
  <!-- template has navbar and footer -->
  <q-page padding>
    <Search />
    <List />
    <Benefits />
    <Location />
  </q-page>
</template>

<script>
import Search from 'components/sections/Search.vue'
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
  }
}
</script>
