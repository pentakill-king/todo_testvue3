<template>
  <div id="app">
    <img
      class="logo"
      src="./assets/logo.jpeg"
    >
    <div>
    </div>
    <Home />
  </div>
</template>

<script>
import Home from "@/components/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}

.logo {
  width: 10em;
  border-radius: 22%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #999999;
  /* margin-top: 60px; */
  background-color: black;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
