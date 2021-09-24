import { createApp } from 'vue'
import App from '@/App.vue'
import setupStore from '@/store'
import setupRouter from '@/router'
import setupStyles from '@/styles'

const app = createApp(App)
setupStore(app)
setupRouter(app)
setupStyles(app)
app.mount('#app')
