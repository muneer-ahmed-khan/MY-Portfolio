<template>
  <PreLoader :load="load" />
  <div :class="['app', load ? 'no-scroll' : 'scroll']">
    <AppNavbar />
    <!-- <ScrollToTop />
    <router-view />
    <Footer /> -->
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
// import { useRouter } from 'vue-router'
import PreLoader from './components/PreLoader.vue'
import AppNavbar from './components/AppNavbar.vue'
// import Home from './components/Home/Home.vue'
// import About from './components/About/About.vue'
// import Projects from './components/Projects/Projects.vue'
// import Footer from './components/Footer.vue'
// import Resume from './components/Resume/ResumeNew.vue'
// import ScrollToTop from './components/ScrollToTop.vue'

export default {
  name: 'App',
  components: {
    PreLoader,
    AppNavbar
    // Home,
    // About,
    // Projects,
    // Footer,
    // Resume,
    // ScrollToTop
  },
  setup() {
    const load = ref(true)

    onMounted(() => {
      const timer = setTimeout(() => {
        load.value = false
      }, 1200)

      return () => clearTimeout(timer)
    })

    return { load }
  }
}
</script>

<style scoped>
/* Import your CSS files */
/* @import './style.css';
@import './App.css';
@import 'bootstrap/dist/css/bootstrap.min.css'; */

.app {
  text-align: center;
}

.no-scroll {
  overflow: hidden;
  height: 100vh;
}
</style>
