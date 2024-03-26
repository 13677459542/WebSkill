import { createApp } from 'vue'
import App from './App.vue'
import PageContainer from '@/components/PageContainer.vue'
import router from './router'
// pinia 独立维护
import pinia from '@/stores/index'
// pnpm add sass -D
import '@/assets/main.scss'

const app = createApp(App)
app.component('PageContainer', PageContainer)
app.use(router)
app.use(pinia)
app.mount('#app')
