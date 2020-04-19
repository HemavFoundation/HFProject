<template>
  <div>
    <h1>Hello {{userName}} randomNumber = {{randomNumber}}</h1>
    <button @click="setRandomNumber">set new Random Number</button>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Title",
  computed: {
    ...mapGetters({
      userName: 'user/getUserName'
    })
  },
  methods: {
    setRandomNumber() {
      this.randomNumber = Math.random()
    }
  },
  data() {
    return {
      randomNumber: this.setRandomNumber()
    }
  },
  created() {
    this.setRandomNumber()
  }
};
</script>


<style scopped>
  div {
    text-align: center;
  }

  div button {
    border: 1px solid lightblue;
    padding: 10px;
  }

  h1 {
    font-size: 30px;
  }
</style>