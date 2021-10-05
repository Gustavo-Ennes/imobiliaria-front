<template>
    <div class='row'>
      <div class='col-8'>
        <p class='text-h5'>{{ tenant.name }}</p>
        <p class='text-caption'> {{ tenant.username }} </p>
      </div>
      <div class='col'>
        <q-icon name='visibility'></q-icon>
      </div>
      <div class='col'>
        <q-icon name='edit'></q-icon>
      </div>
      <div class='col'>
        <q-icon name='delete'></q-icon>
      </div>
    </div>
</template>

<script>
export default {
  name: "TenantItem",

  props: [
    'tenant'
  ]
}
</script>
