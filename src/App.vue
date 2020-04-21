<template>
<div>
<<<<<<< Updated upstream:src/App.vue
  <v-app id="inspire">
    <Login />
=======
  <v-app id="app">
    <router-view/>
>>>>>>> Stashed changes:client/src/App.vue
    <Footer />
  </v-app>
</div>
</template>


<script>
import Login from "./components/Login";
import Footer from "./components/Footer";
<<<<<<< Updated upstream:src/App.vue
=======
import Header from "./components/Header";
>>>>>>> Stashed changes:client/src/App.vue

export default {
  name: "App",
  components: {
    Login,
<<<<<<< Updated upstream:src/App.vue
    Footer
=======
    Footer,
    Header
>>>>>>> Stashed changes:client/src/App.vue
  },
  props: {
    source: String
  },

  data: () => ({
    //
  })
};
</script>
