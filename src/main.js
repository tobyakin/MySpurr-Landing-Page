import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { createUnhead } from '@unhead/vue';
//import Vue3Autocounter from 'vue3-autocounter'
import { VueQueryPlugin } from 'vue-query'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createUnhead();

app.use(head);

app.use(Toast, { position: POSITION.TOP_RIGHT })
//app.component('vue3-autocounter', Vue3Autocounter)
app.use(VueQueryPlugin)
app.use(createPinia())
app.use(Antd)
app.use(router)
app.mount('#app')
