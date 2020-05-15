<template>
  <div>
    <Header />
    <Navbar />
    <DrawerMenu />
    <Map />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import Map from '@/components/Map.vue';
import DrawerMenu from '@/components/DrawerMenu.vue';

export default {
  name: 'Status',
  components: {
    Navbar,
    Header,
    Map,
    DrawerMenu
  }
}
</script>
