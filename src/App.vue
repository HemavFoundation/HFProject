<template>
<div>
  <v-app id="inspire">
    <Login />
    <Footer />
  </v-app>
</div>
</template>


<script>
import Login from "./components/Login";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Login,
    Footer
  },
  props: {
    source: String
  },

  data: () => ({
    //
  })
};
</script>
