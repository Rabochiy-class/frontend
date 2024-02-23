import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

import { createPinia } from 'pinia'
import vuetify from './utils/plugins/vuetify'


const pinia = createPinia()

const app = createApp(App)

app.use( vuetify ).use( pinia ).use( router ).mount('#app')
