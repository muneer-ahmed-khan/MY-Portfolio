<template>
  <Container class="footer">
    <Row>
      <Column md="4" class="footer-copywright">
        <h3>Designed and Developed by Muneer Ahmed Khan</h3>
      </Column>
      <Column md="4" class="footer-copywright">
        <h3>Copyright © {{ year }} MA</h3>
      </Column>
      <Column md="4" class="footer-body">
        <ul class="footer-icons">
          <li class="social-icons">
            <a
              href="https://github.com/muneer-ahmed-khan"
              style="color: white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li class="social-icons">
            <a
              href="https://twitter.com/muneer_ahmed"
              style="color: white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="social-icons">
            <a
              href="https://www.linkedin.com/in/muneer-ahmed-khan/"
              style="color: white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li class="social-icons">
            <a
              href="https://www.instagram.com/muneerahmed/"
              style="color: white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </Column>
    </Row>
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Container from './bootstrap/Container.vue'
import Row from './bootstrap/Row.vue'
import Column from './bootstrap/Col.vue'

export default defineComponent({
  name: 'TheFooter',
  components: {
    Container,
    Row,
    Column
  },
  setup() {
    const year = ref(new Date().getFullYear())
    return { year }
  }
})
</script>

<style>
.footer {
  background-color: #212529;
  color: white;
  text-align: center;
  padding: 20px 0;
}

.footer-copywright {
  margin-bottom: 10px;
}

.footer-icons {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 0;
}

.social-icons a {
  font-size: 1.5rem;
  color: white;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #0d6efd;
}
</style>
