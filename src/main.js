import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Lottie from 'vue3-lottie'
import { MotionPlugin } from '@vueuse/motion'
import VueMobileDetection from 'vue-mobile-detection'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Lottie)
app.use(MotionPlugin)
app.use(VueMobileDetection)

app.mount('#app')
