<template>
    <div class='row'>
      <div class='col-8'>
        <p class='text-h5'>{{ owner.name }}</p>
        <p class='text-caption'> {{ owner.username }} </p>
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
  name: "OwnerItem",

  props: [
    'owner'
  ]
}
</script>
