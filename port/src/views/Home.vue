<template>
  <div id="home">
    <Fullwidth></Fullwidth>
    <div class="about">
      <div class="column is-half is-offset-3">
          <h3>About Me</h3>
          <p class="aboutme">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.
          </p>
      </div>
    </div>
    <Projects></Projects>
  </div>
</template>

<script>
import Fullwidth from '../components/Fullwidth'
import Projects from '../components/Projects'
export default {
  components: {Fullwidth, Projects}
}
</script>

<style>
#home {
  margin-top: 50px;
}
.about {
  padding-bottom: 100px;
}
h3 {
  font-size: 36px;
  color: #535460;
  font-weight: 500;
  padding: 40px;
  text-align: center;
}
.aboutme {
  text-align: justify;
  line-height: 30px;
}
</style>