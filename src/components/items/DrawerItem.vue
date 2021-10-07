<template>
  <q-item clickable v-ripple >

    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label> {{ name }} </q-item-label>
      <q-item-label caption> {{ description }} </q-item-label>
    </q-item-section>
    
  </q-item>
</template>

<script>
export default {
  name: 'DrawerItem',
  props: ['name', 'icon', 'description'],
  setup(){
    return {}
  }
}
</script>
