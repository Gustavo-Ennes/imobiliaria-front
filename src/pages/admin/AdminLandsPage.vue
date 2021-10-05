<template>
  <transition
  appear
  enter-active-class='animate__animated animate__zoomInDown animate__fast'
  leave='animate__zoomOut Down'
  >
    <q-page padding>
      <h1 class='text-h2'>Lands</h1>
      <q-list>

        <q-item  v-for='land in fakeLands' :key='land.title'>
          <q-item-section>

            <LandItem :land="land" />

          </q-item-section>
        </q-item>

      </q-list>
    </q-page>
  </transition>
</template>

<script>
import LandItem from '../../components/items/LandItem.vue'

export default {
  name: 'AdminLandsPage',

  components: {
    LandItem
  },

  data(){
    return{
      fakeLands:[
        {
          title: "land 1",
          subtitle: "land etc"
        },
        {
          title: "land 2",
          subtitle: "land setc"
        },
        {
          title: "land 3",
          subtitle: "another land"
        },
        {
          title: "land 4",
          subtitle: "land blablabla"
        },
      ]
    }
  }
}
</script>
