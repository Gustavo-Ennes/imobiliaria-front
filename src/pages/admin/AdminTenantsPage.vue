<template>

  <transition
  appear
  enter-active-class='animate__animated animate__zoomInDown animate__fast'
  >
    <q-page padding>
      <h1 class='text-h2'>Tenants</h1>
      <q-list>

        <q-item  v-for='tenant in fakeTenants' :key='tenant.name'>
          <q-item-section>

            <TenantItem :tenant="tenant" />

          </q-item-section>
        </q-item>

      </q-list>
    </q-page>
  </transition>

</template>

<script>
import TenantItem from '../../components/items/TenantItem.vue'

export default {
    name: 'AdminTenantsPage',

    components:{
      TenantItem
    },

    data() {
      return {
        fakeTenants: [
          {
            name: "tenant 1",
            username: "user tenant1"
          },
          {
            name: "tenant 2",
            username: "user tenan2"
          },
          {
            name: "tenant 3",
            username: "user tenant3"
          },
          {
            name: "tenant 3",
            username: "user tenant3"
          }
        ]
      }
    }
}
</script>
