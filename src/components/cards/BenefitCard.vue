<template>
 <q-card square class='shadow-8 littleTransparent full-width'>
   <q-card-section style='height: 70%'>
     <p class='text-h5 vertical-top'> {{ title }} </p>
     <p class='verical-top' caption> {{ subtitle }} </p>
   </q-card-section>
   <q-card-actions vertical>
     <q-btn color="teal-10" :to='btn.path' :label='btn.title' class='on-bottom'/>
   </q-card-actions>
 </q-card>
</template>

<script>
export default {
  name: "BenefitCard",

  props: ['icon', 'title', 'subtitle', 'btn']

}
</script>

<style lang='scss'>



</style>