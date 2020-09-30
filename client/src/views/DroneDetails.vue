<template>
  <div>
    <Header />
    <Navbar />
    <v-card color="#385F73" dark>
      <v-card-title class="headline" style="margin-bottom:-30px;">Drone details</v-card-title>
      <v-row class="row-bottom-margin">
        <v-card-title>ID Plate</v-card-title>
        <v-col cols="12" sm="6" md="1">
          <div class="my-2">
            <v-text-field />
          </div>
        </v-col>
      </v-row>
      <v-row class="row-bottom-margin">
        <v-card-title>Manufacturer</v-card-title>
        <v-col cols="12" sm="6" md="1">
          <div class="my-2">
            <v-text-field />
          </div>
        </v-col>
      </v-row>
      <v-row class="row-bottom-margin">
        <v-card-title>Date</v-card-title>
        <v-col cols="12" sm="6" md="1">
          <div class="my-2">
            <v-text-field />
          </div>
        </v-col>
      </v-row>
    </v-card>
    <div style="padding:20px;"></div>
    <v-card class="my-2">
      <v-tabs>
        <v-tab>Flights list</v-tab>
      </v-tabs>
    </v-card>
    <!-- DroneDetails table component -->
    <data-table tableEntry="dronedetails" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import axios from "axios";
import dataTable from "@/components/DroneDetailsTable.vue";

export default {
  name: "DroneDetails",
  components: {
    Navbar,
    Header,
    dataTable,
  },
};
</script>

<style scoped>
.droneListMarginLeft {
  margin-left: 20px;
}
.v-text-field .v-input__control .v-input__slot {
  min-height: auto !important;
  display: flex !important;
  align-items: center !important;
}
.row-bottom-margin {
  margin-bottom: -70px;
}

.v-btn_white-content {
  color: white;
}
</style>