<template>

  <transition
  appear
  enter-active-class='animate__animated animate__zoomInDown animate__fast'
  >
    <q-page padding>
      <h1 class='text-h2'>Properties</h1>
      <q-list>

        <q-item  v-for='property in fakeProperties' :key='property.title'>
          <q-item-section>

            <PropertyItem :property="property" />

          </q-item-section>
        </q-item>

      </q-list>
    </q-page>
  </transition>

</template>

<script>
import PropertyItem from '../../components/items/PropertyItem.vue'
export default {
  name: 'AdminPropertiesPage',

  components: {
    PropertyItem
  },

  data(){
    return{
      fakeProperties:[
        {
          title: "Some Title1",
          subtitle: "property s"
        },
        {
          title: "Some Title2",
          subtitle: "small house"
        },
        {
          title: "Some Title3",
          subtitle: "big house"
        },
        {
          title: "Some Flat",
          subtitle: "commom flat"
        }
      ]
    }
  }
}
</script>
