import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

let app = null

export function mount(el) {
  app = createApp(App)
  app.use(createPinia())
  app.use(ElementPlus)
  app.mount(el)
}

if (!window.__POWERED_BY_HOST__) {
  mount('#app')
}