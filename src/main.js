import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { initViewportManager, setSafeAreaInsets } from './utils/viewport.js'

// 初始化视口管理
initViewportManager()
setSafeAreaInsets()

const app = createApp(App)
app.use(router)
app.mount('#app') 