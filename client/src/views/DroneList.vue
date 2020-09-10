<template>
  <div>
    <Header />
    <Navbar />
    <div class="my-2 mx-2">
      <router-link to="RegisterDrone">
      <v-btn depressed small color="primary" class="droneListMarginLeft">Create a drone</v-btn>
      </router-link>
      <v-btn depressed small color="primary" class="droneListMarginLeft">Upload drone data</v-btn>
    </div>
  <data-table tableEntry="dronelist"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import axios from 'axios';
import dataTable from '@/components/DroneListTable.vue'

export default {
  name: "DroneList",
  components: {
    Navbar,
    Header,
    dataTable
  },
};
</script>

<style scoped>
.droneListMarginLeft{
margin-left: 20px;
}
</style>