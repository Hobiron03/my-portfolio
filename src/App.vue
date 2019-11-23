<template>
  <div id="app">
    <div class="header-app">
      <Header></Header>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './views/Home.vue';
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  }
}
</script>

<style>
#app {
  font-size: 18px;
  font-family: 'M PLUS 1p', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 1400px;
}

.header-app{
  margin-bottom: 65px;
}
</style>
