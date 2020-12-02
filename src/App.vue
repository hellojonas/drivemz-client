<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/layout/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  font: inherit;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.2rem;
  font-family: 'Poppins', arial, sans-serif;
  color: $gray-400;
  background-color: $gray-800;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
