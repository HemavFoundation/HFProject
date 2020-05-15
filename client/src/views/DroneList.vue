<template>
  <div>
    <Header />
    <Navbar />

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'DroneList',
  components: {
    Navbar,
    Header
  }
}
</script>