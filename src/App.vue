<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'
export default {
  components: { Nav, Footer }
}
</script>

<style>
#app {
    overflow: hidden;
}
</style>