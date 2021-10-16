<template>
  <div class='wrapper'>
    <q-card bordered class="card bg-purple-1">
      <q-img height="350px" :src="item.img">
        <div class="absolute-bottom text-h6">
        {{ item.title }}
        <p caption class='labelFont'> {{ item.price }}<span v-if="type === 'rent'">/Mo.</span> </p>
        </div>
      </q-img>

      <q-card-section class='textFont'>
        {{ item.subtitle }}
      </q-card-section>

      <q-card-actions vertical>
        <q-btn color="teal-7" label='Let me see' />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "HouseCard",

  props: ['item', 'type']
}
</script>

<style>
.wrapper{
  width: 100%;
}
.card{
  width: 100% !important;
}
</style>