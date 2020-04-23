<template>
<div>
  <v-app id="app">
    <router-view/>
    <Footer />
  </v-app>
</div>
</template>


<script>
import Login from "./components/Login";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Login,
    Footer,
    Header
  },
  props: {
    source: String
  },

  data: () => ({
    //
  })
};
</script>
