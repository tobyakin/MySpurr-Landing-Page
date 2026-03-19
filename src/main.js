import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
//import Vue3Autocounter from 'vue3-autocounter'
import { createUnhead, UnheadPlugin } from '@unhead/vue'
import { VueQueryPlugin } from 'vue-query'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead();

app.use(UnheadPlugin) 

app.use(Toast, { position: POSITION.TOP_RIGHT })
//app.component('vue3-autocounter', Vue3Autocounter)
app.use(VueQueryPlugin)
app.use(createPinia())
app.use(Antd)
app.use(router)
app.mount('#app')
