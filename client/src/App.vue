<template>
<div>
  <b-container id="app">
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view/>
      </b-col>
    </b-row>
  </b-container>
  <Footer />
</div>


</template>


<script>
import Login from "./components/Login";
import Footer from "./components/Footer";
import Navbar from '@/components/Navbar';

// import Title from "./components/Title";

export default {
  name: "App",
  components: {
    Login,
    Footer,
    Navbar
    // Title
  },
  props: {
    source: String
  }
};
</script>
