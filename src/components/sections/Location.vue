<template>
  <div class='q-ma-md' id='google'>
  </div>
</template>

<script>

import { Loader } from "@googlemaps/js-api-loader"

export default {
  name: 'Location',

  mounted () {
    let map, el
    // google pi loader
    this.loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("google"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
    // adjusting height of component
    const height = () => {
      return window.innerWidth > 1023 ? window.innerHeight / 3 * 2 : window.innerHeight
    }
    el = document.getElementById("google")
    el.style.setProperty('height', `${height()}px`)
  },

  setup () {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_API_KEY,
      version: "weekly"
    });

    return { loader }
  }
}
</script>

