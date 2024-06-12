<template>
  <q-page padding>
    <h1>Weather</h1>
    <p></p>
    <Weather />
  </q-page>
</template>

<script>
import Weather from './Weather.vue'

export default {
  name: 'Home',
  components: {
    Weather
  }
}
</script>
