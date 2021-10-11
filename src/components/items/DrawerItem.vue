<template>
  <q-item clickable v-ripple class='hover' >

    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label> {{ name }} </q-item-label>
      <q-item-label caption class='hoverText'> {{ description }} </q-item-label>
    </q-item-section>
    
  </q-item>
</template>

<script>
export default {
  name: 'DrawerItem',
  props: ['name', 'icon', 'description', 'to'],
  setup(){
    return {}
  }
}
</script>

<style lang="scss" scoped>
.hover:hover{
  background-color: rgba(100, 100, 255, 0.5);
  .hoverText{
    color: rgba(255, 255, 255, 0.9);
  }
}
</style>
