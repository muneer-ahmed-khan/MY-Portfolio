import { createRouter, createWebHistory } from 'vue-router'

// Import your component routes
import Home from '../components/Home/Home.vue'
// import About from '../components/About/About.vue'
// import Projects from '../components/Projects/Projects.vue'
// import Resume from '../components/Resume/ResumeNew.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
  // { path: '/about', component: About },
  // { path: '/projects', component: Projects },
  // { path: '/resume', component: Resume },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Export the router instance for use in main.ts
export default router
