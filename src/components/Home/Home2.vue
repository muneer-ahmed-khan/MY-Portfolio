<template>
  <Container :fluid="true" custom-class="home-about-section" id="about">
    <Container>
      <Row>
        <TheCol md="8" class="home-about-description">
          <h1 style="font-size: 2.6em">LET ME <span class="purple"> INTRODUCE </span> MYSELF</h1>
          <p class="home-about-body">
            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
            <br />
            <br />I am fluent in classics like
            <i>
              <b class="purple"> C++, Javascript and Go. </b>
            </i>
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b class="purple">Web Technologies and Products </b> and also in areas related to{" "}
              <b class="purple"> Blockchain. </b>
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products with
            <b class="purple">Node.js</b> and
            <i>
              <b class="purple"> Modern Javascript Libraries and Frameworks </b>
            </i>
            &nbsp; like
            <i>
              <b class="purple"> React.js and Next.js </b>
            </i>
          </p>
        </TheCol>
        <TheCol md="4" class="myAvtar">
          <!-- <Tilt> -->
          <img src="@/assets/avatar.svg" class="img-fluid" alt="avatar" />
          <!-- </Tilt> -->
        </TheCol>
      </Row>
      <Row>
        <TheCol md="12" class="home-about-social">
          <h1>FIND ME ON</h1>
          <p>Feel free to <span class="purple">connect</span> with me</p>
          <ul class="home-about-social-links">
            <li class="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                target="_blank"
                rel="noreferrer"
                class="icon-colour home-social-icons"
              >
                <i class="fab fa-github"></i>
                <!-- Font Awesome GitHub icon -->
              </a>
            </li>
            <li class="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                target="_blank"
                rel="noreferrer"
                class="icon-colour home-social-icons"
              >
                <i class="fab fa-twitter"></i>
                <!-- Font Awesome Twitter icon -->
              </a>
            </li>
            <li class="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                target="_blank"
                rel="noreferrer"
                class="icon-colour home-social-icons"
              >
                <i class="fab fa-linkedin-in"></i>
                <!-- Font Awesome LinkedIn icon -->
              </a>
            </li>
            <li class="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                target="_blank"
                rel="noreferrer"
                class="icon-colour home-social-icons"
              >
                <i class="fab fa-instagram"></i>
                <!-- Font Awesome Instagram icon -->
              </a>
            </li>
          </ul>
        </TheCol>
      </Row>
    </Container>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheCol from '@/components/bootstrap/Col.vue' // Importing custom Bootstrap components
import Row from '@/components/bootstrap/Row.vue' // Importing custom Bootstrap components
import Container from '@/components/bootstrap/Container.vue' // Importing custom Bootstrap components
// import Tilt from 'react-parallax-tilt'

export default defineComponent({
  name: 'TheHome2',
  components: {
    Container,
    Row,
    TheCol
    // Tilt
  }
})
</script>

<style scoped>
.home-about-description {
  text-align: left;
}

.purple {
  color: #6a0dad;
}

.home-about-social {
  text-align: center;
}

.home-about-social-links {
  list-style-type: none;
  padding: 0;
}

.social-icons {
  display: inline-block;
  margin: 0 10px;
}

.home-social-icons {
  font-size: 2em;
  color: #333;
}

.home-social-icons:hover {
  color: #6a0dad;
}

.myAvtar img {
  border-radius: 50%;
  width: 100%;
  max-width: 250px;
}
</style>
