<template>
  <Login />
</template>


<script>
import Login from "./components/login";
export default {
  name: "App",

  components: {
    Login
  },
  props: {
    source: String
  },

  data: () => ({
    //
  })
};
</script>
