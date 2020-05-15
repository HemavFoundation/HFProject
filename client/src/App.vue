<template>
<div>
  <v-app id="app">
    <router-view/>
    <Footer />
  </v-app>
</div>
</template>


<script>
//MAP import and component added for testing purposes
import Login from "./components/Login";
import Footer from "./components/Footer";
import Header from "./components/Header";

const axios = require('axios').default;

export default {
  name: "App",
  components: {
    Login,
    Footer,
    Header,
  },
  props: {
    source: String
  }
};
</script>
