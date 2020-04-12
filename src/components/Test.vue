<template>
  <div class="test">
    <h4>{{ testProp }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: ['testProp']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    color: aquamarine;
  }
</style>
