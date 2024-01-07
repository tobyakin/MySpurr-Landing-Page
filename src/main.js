import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { createHead } from '@vueuse/head'
import Vue3Autocounter from 'vue3-autocounter'


import App from './App.vue'
import router from './router'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const app = createApp(App)
app.use(Toast, { position: POSITION.TOP_RIGHT })
app.component('QuillEditor', QuillEditor)
app.component('vue3-autocounter', Vue3Autocounter)
app.use(createPinia())
app.use(router)
app.use(createHead())
app.mount('#app')
