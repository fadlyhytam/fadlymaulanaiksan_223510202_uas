<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> UAS prak PBK </q-toolbar-title>
        <q-btn flat round icon="home" @click="goHome" />
        <q-btn flat round icon="cloud" @click="goWeather" />
        <!-- Tambah tombol untuk navigasi tugas -->
        <q-btn flat round icon="assignment" @click="goTask1" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goWeather() {
      this.$router.push('/weather')
    },
    goTask1() {
      this.$router.push('/task1')
    }
  }
}
</script>
