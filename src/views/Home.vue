<template>
  <div id="home">
    <Fullwidth></Fullwidth>
    <div class="about">
      <h3 class="section-title">About Me</h3>
      <div class="column is-mobile is-two-thirds is-offset-1">
          <div class="about-me">
              <div class="column">
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
              <div class="prof-pic">
                  <b-image  class="prof-pic column" rounded=true :src="prof.imgurl" aria-placeholder="Amos Cheruiyot" ratio="1by1"></b-image>
              </div>
          </div>
      </div>
    </div>
    <Projects></Projects>
    <Contacts></Contacts>
  </div>
</template>

<script>
import Fullwidth from '../components/Fullwidth'
import Projects from '../components/Projects'
import Contacts from '../components/Contacts'
export default {
  components: {Fullwidth, Projects, Contacts},
  data () {
    return {
      prof: {
        placeholder: 'Amos Cheruiyot',
        imgurl: require('../assets/amos.png')
      }
    }
  }
}
</script>

<style>
#home {
  margin-top: 50px;
  min-width: 100vh;
  max-width: 100%;
}
.about {
  padding-bottom: 50px;

}
.section-title {
  font-size: 36px;
  color: #535460;
  font-weight: 500;
  padding: 20px;

  text-align: center;
}
.aboutme {
  line-height: 30px;
  text-align: left;
}
.about-me {
  display: inline-flex;
  width: 100%;
}
.prof-pic{
  height: 200px;
  width: 200px;
  padding-left: 120px;

}
</style>