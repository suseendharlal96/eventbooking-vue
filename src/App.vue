<template>
  <div id="app">
    <Layout></Layout>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Layout from "./components/Layout/Layout.vue";

export default {
  name: "App",
  components: {
    Layout: Layout
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
