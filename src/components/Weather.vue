<template>
  <q-card>
    <q-card-section>
      <q-input v-model="city" label="Enter city name" outlined dense @keyup.enter="fetchWeather" />
      <q-btn label="Search" color="primary" @click="fetchWeather" />

      <div v-if="weather" class="q-mt-md">
        <h2>{{ weather.name }}</h2>
        <p>Temperature: {{ weather.main.temp }}°C</p>
        <p>Weather: {{ weather.weather[0].description }}</p>
      </div>
      <div v-else-if="error" class="q-mt-md">
        <p>Error loading weather data: {{ error }}</p>
      </div>
      <div v-else class="q-mt-md">
        <q-spinner color="primary" />
        <p>Loading weather data...</p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Weather',
  data() {
    return {
      weather: null,
      error: null,
      city: 'Jakarta'
    }
  },
  created() {
    this.fetchWeather()
  },
  methods: {
    async fetchWeather() {
      const apiKey = '94bf6d59f86ae95e8071e78240546056'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`

      try {
        const response = await axios.get(url)
        this.weather = response.data
        this.error = null
      } catch (error) {
        this.weather = null
        this.error = error.response ? error.response.data.message : error.message
      }
    }
  }
}
</script>
