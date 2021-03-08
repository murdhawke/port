<template>
<div id="nav">
    <b-navbar fixed-top="true">
      <template #brand centered="true">
          <router-link to="/">𝔸ℂ</router-link>
      </template>
      <template #end>
            <b-navbar-item tag="div">
                <div class="pages">
                 <router-link to="/resume">Resume</router-link>
                 <router-link to="/posts">Posts</router-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</div>
</template>

<script>
export default {
  data() {
    return {
     
    }
  }
}
</script>

<style>
Nav { 
  padding-top: 25px;
  padding-left:50px;
  padding-right: 50px;
  font-size: 20px;
  padding-bottom: 20px;
  background-image: url('../assets/Hydrogen.jpg');
}
.navbar-brand a {
  font-size: 40px;
  margin-left: 50px;
  text-decoration: none;
  color: white;
}
.pages a {
  margin-right: 50px;
  color: white;
  
}
a {
  text-decoration: none;

}
.navbar-menu.is-active {
  background-image: url('../assets/Hydrogen.jpg');
}
</style>