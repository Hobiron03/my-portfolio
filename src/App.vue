<template>
  <div id="app">
    <div class="header-app">
      <Header></Header>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
// import Home from './views/Home.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style>
#app {
  /* background-color: #F6F6F6; */
  font-size: 18px;
  color: rgb(49, 49, 49);
  font-family: 'M PLUS 1p', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

.header-app{
  margin-bottom: 67px;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

ul {
  margin: 0px;

  padding: 0px;
}

</style>
