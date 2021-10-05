<template>

  <transition
  appear
  enter-active-class='animate__animated animate__zoomInDown animate__fast'
  >
    <q-page padding>
      <h1 class='text-h2'>Owners</h1>
      <q-list>

        <q-item  v-for='owner in fakeOwners' :key='owner.username'>
          <q-item-section>

            <OwnerItem :owner="owner" />

          </q-item-section>
        </q-item>

      </q-list>
    </q-page>
  </transition>

</template>

<script>
import OwnerItem from '../../components/items/OwnerItem.vue'
export default {
  name: 'AdminOwnersPage',

  components: {
    OwnerItem
  },

  data(){
    return {
      fakeOwners: [
        {
          name: "Gustavo",
          username: "kratos"
        },
        {
          name: "Thaynara",
          username: "Mozi"
        },
        {
          name: "Emanuella",
          username: "Manu"
        },
        {
          name: "Elieusa",
          username: "Vó Eli"
        },
      ]
    }
  }
}
</script>
