<template>
  <TheNavbar :variant="navColour ? 'dark' : 'light'" fixed="top" expand="md" :fluid="true">
    <!-- Brand Slot -->
    <template #brand>
      <router-link to="/" class="navbar-brand d-flex">
        <img src="@/assets/logo.png" class="img-fluid logo" alt="brand" />
      </router-link>
    </template>

    <!-- Navigation Links -->
    <TheNav navbar>
      <div class="nav-item">
        <router-link class="nav-link" to="/" @click="closeNavbar">
          <font-awesome-icon
            icon="home"
            style="margin-bottom: 2px; margin-right: 4px; font-size: 1.2rem"
          />
          Home
        </router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" to="/about" @click="closeNavbar">
          <font-awesome-icon
            icon="user"
            style="margin-bottom: 2px; margin-right: 4px; font-size: 1.2rem"
          />
          About
        </router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" to="/project" @click="closeNavbar">
          <font-awesome-icon
            icon="desktop"
            style="margin-bottom: 2px; margin-right: 4px; font-size: 1.2rem"
          />
          Projects
        </router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" to="/resume" @click="closeNavbar">
          <font-awesome-icon
            icon="file-lines"
            style="margin-bottom: 2px; margin-right: 4px; font-size: 1.2rem"
          />
          Resume
        </router-link>
      </div>
      <div class="nav-item">
        <a
          class="nav-link"
          href="https://soumyajitblogs.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <font-awesome-icon
            icon="pen-nib"
            style="margin-bottom: 2px; margin-right: 4px; font-size: 1.2rem"
          />
          Blogs
        </a>
      </div>
      <div class="nav-item fork-btn">
        <a
          class="btn btn-primary fork-btn-inner"
          href="https://github.com/muneer-ahmed-khan/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon
            icon="code-branch"
            :style="{ fontSize: '1.2rem', width: '0.8em', height: '0.8em', marginRight: '2px' }"
          />
          <font-awesome-icon
            icon="star"
            :style="{ fontSize: '1.1rem', width: '0.8em', height: '0.8em' }"
          />
        </a>
      </div>
    </TheNav>
  </TheNavbar>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import TheNavbar from '@/components/bootstrap/Navbar.vue'
import TheNav from '@/components/bootstrap/Nav.vue'

export default defineComponent({
  name: 'AppNavBar',
  components: {
    TheNavbar,
    TheNav
  },
  setup() {
    const navColour = ref(false)

    const scrollHandler = () => {
      navColour.value = window.scrollY >= 20
    }

    const closeNavbar = () => {
      const navbarCollapse = document.querySelector('.navbar-collapse')
      if (navbarCollapse) {
        navbarCollapse.classList.remove('show')
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', scrollHandler)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', scrollHandler)
    })

    return {
      navColour,
      closeNavbar
    }
  }
})
</script>

<style>
.navbar {
  transition: background-color 0.3s ease-in-out;
}

.sticky {
  background-color: #343a40;
}

.logo {
  max-height: 40px;
}
</style>
