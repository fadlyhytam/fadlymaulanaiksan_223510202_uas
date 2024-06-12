import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../components/Home.vue') },
  { path: '/weather', component: () => import('../components/Weather.vue') },
  // Tambahkan rute untuk tugas pertemuan 1-7
  { path: '/task1', component: () => import('../components/Task1.vue') }
  // Tambahkan lebih banyak rute sesuai kebutuhan
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
