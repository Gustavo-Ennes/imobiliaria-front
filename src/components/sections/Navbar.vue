<template>

  <q-header 
  elevated 
  class="text-white q-pa-xs tbHeight bg-teal-7"
  reveal
  :reveal-offset="5">

    <q-toolbar class="text-yellow-4">
      <q-btn flat round dense icon="menu" class="q-mr-sm" @click='toggleLeftDrawer'/>
      <q-avatar>
        <img src="~assets/logo/logo.png">
      </q-avatar>

      <q-toolbar-title @click='$router.push({name: "index"})' class='text-yellow-4 brandName'>Imobiliária</q-toolbar-title>
    </q-toolbar>
    
  </q-header>

  <q-drawer
    :model-value='leftDrawerOpen'
    :width="200"
    class='bg-teal-1'
    @mouseleave="toggleLeftDrawer"
    persistent

  >
    <q-scroll-area class="fit">
      <q-list padding class="menu-list text-blue-10">

        <DrawerItem name='Locação' icon='mouse' :description="'Imóveis e terrenos para locação'" @click='$router.push({name: "RentList"})' />
        <DrawerItem name='Venda' icon='star' :description="'Imóveis e terrenos para venda'" @click='$router.push({name: "SellList"})' />
        
      </q-list>
      <q-space />
      <q-list padding class="menu-list  text-blue-10" bordered separator>
        <DrawerItem name='Cadastro Locador' @click="$router.push({name: 'OwnerRegistration'})" icon='send' :description="'Faça seu cadastro para alugar casas ou terrenos'" />
        <DrawerItem name='Cadastro Locatário'  @click="$router.push({name: 'TenantRegistration'})" icon='drafts' :description="'Se cadastre para alugar ou vender seus imóveis ou terrenos'"/>
      </q-list>
      <q-space />
      <q-list padding class="menu-list  text-blue-10" bordered separator>
        <DrawerItem name='Sobre a Imobiliária' icon='drafts' :description="'Veja nossos termos de uso e política de dados'"/>
      </q-list>
      <q-list padding class="menu-list text-blue-10" bordered separator>
        <DrawerItem 
        name='Entrar' 
        icon='login' 
        :description="'Administre sua conta'"
        @click="$router.push({name: 'login'})"/>
      </q-list>
    </q-scroll-area>
  </q-drawer>

</template>

<script>
import {ref} from 'vue'
import DrawerItem from 'components/items/DrawerItem.vue'

export default {
  name: 'Navbar',

  components: {
    DrawerItem
  },

  setup(props){
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style scoped>
.brandName{
  cursor: pointer;
}
.bgTransparent{
  background-color: rgba(255, 255, 255, 0.1) !important;
}
@media screen and (min-width: 1023px){
  .tbHeight{
    height: 10% !important;
  }
}
</style>
