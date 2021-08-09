import 'vue-global-api'
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import App from '@/App.vue'
import setupStore from '@/store'
import setupRouter from '@/router'

import '@/styles/base.scss'

const app = createApp(App)
setupStore(app)
setupRouter(app)
app.mount('#app')
