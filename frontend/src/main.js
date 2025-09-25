import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'

import bootstrap from  'bootstrap/dist/js/bootstrap.js'

import '../public/assets/css/style.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import print from 'vue3-print-nb'


createApp(App).use(store).use(router).use(bootstrap).use(VueSweetalert2).use(print).mount('#app')
