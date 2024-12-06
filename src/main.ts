import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faUser,
  faEnvelope,
  faDesktop,
  faFileLines,
  faPenNib,
  faCodeBranch,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/main.css'

library.add(faHome, faUser, faEnvelope, faDesktop, faFileLines, faPenNib, faCodeBranch, faStar)

import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())

app.use(Particles, {
  init: async (engine) => {
    // Load the tsParticles engine with all the available features
    await loadFull(engine)
  }
})

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
