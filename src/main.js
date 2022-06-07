import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import css from  './assets/bootstrap/dist/css/bootstrap.css'
import css1 from './assets/css/index.css'
import axios from  'axios'

// vueaxios.defaults.baseURL="http://localhost:8181";

const app = createApp(App)
//请求根路径
axios.defaults.baseURL = 'http://localhost:8181'
app.use(router)
//全局挂载在app上
app.config.globalProperties.$http = axios
app.mount('#app')
// createApp(App).use(router).mount('#app')