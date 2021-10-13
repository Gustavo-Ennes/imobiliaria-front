<template>
  <q-card  square class='q-ma-md q-pa-sm shadow-8 littleTransparent'>
    <q-card-section>
      <p class='text-h5'>Search properties or lands</p>
    </q-card-section>
    <q-card-section>
      <div class='row justify-content-center'>

        <div class='col-12 col-md-6 text-center'>
          <q-btn-toggle
            glossy
            v-model="type"
            :options="[
              { label: 'Lands', value: 'land' },
              { label: 'Properties', value: 'property' },
              { label: 'Both', value: 'both' }
            ]"
          />
        </div>

        <div class='col-12 col-md-6 text-center'>
          <q-btn-toggle
            glossy
            v-model="how"
            :options="[
              { label: 'To rent', value: 'rent' },
              { label: 'To buy', value: 'buy' },
              { label: 'Both', value: 'both' }
            ]"
          />
        </div>

        <div class='col-6'>
          <div class='q-pa-sm'>
            <q-input
            dense
            v-model="minValue"
            label="Min. value"
            hint="Minimum value you want to pay"
            type='number'
            prefix= "R$ "
            suffix=",00"
            lazy-rules
            :rules='[
              val => val >= 0 || "The number must be positive"
            ]'
          />
          </div>

        </div>
        <div class='col-6'>
          <div class='q-pa-sm'>
            <q-input
            dense
            v-model="maxValue"
            label="Max. value"
            hint="Maximum value you want to pay"
            type='number'
            prefix= "R$ "
            suffix=",00"
            />
          </div>

        </div>

         <div class='col-6'>
          <div class='q-pa-sm'>
            <q-input
            dense
            v-model="city"
            label="City"
            hint="The city you want to live"
            />
          </div>

        </div>

         <div class='col-6'>
          <div class='q-pa-sm'>
            <q-input
            dense
            v-model="neighborhood"
            label="Neighborhood"
            hint="The neighborhood you want to live"
            />
          </div>

        </div>
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn color="teal-5" label="Go!" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'SearchCard',

  data() {
    return {
      type: 'property',
      how: 'rent',
      maxValue: null,
      minValue: 0,
      city: '',
      neighborhood: ''
    }
  }
}
</script>

<style>

</style>