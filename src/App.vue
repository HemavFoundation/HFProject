<template>
<div>
  <v-app id="inspire">
    <Title />
    <Login />
    <Footer />
  </v-app>
</div>
</template>


<script>
import Login from "./components/Login";
import Footer from "./components/Footer";
import Title from "./components/Title";

export default {
  name: "App",
  components: {
    Login,
    Footer,
    Title
  },
  props: {
    source: String
  },

  data: () => ({
    //
  })
};
</script>
