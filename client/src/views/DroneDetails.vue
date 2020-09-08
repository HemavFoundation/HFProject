<template>
  <div>
    <Header />
    <Navbar />
    <v-card color="#385F73" dark>
      <v-card-title class="headline">Drone details</v-card-title>
      <v-row class="row-bottom-margin">
        <v-card-title>ID Plate</v-card-title>
        <v-col cols="12" sm="6" md="1">
          <div class="my-2">
            <v-btn small disabled></v-btn>
          </div>
          </v-col>
      </v-row>
      <v-row class="row-bottom-margin">
        <v-card-title>Manufacturer</v-card-title>
        <v-col cols="12" sm="6" md="3">
          <div class="my-2">
            <v-btn small disabled></v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row class="row-bottom-margin">
        <v-card-title>Date</v-card-title>
        <v-col cols="12" sm="6" md="3">
          <div class="my-2">
            <v-btn small disabled></v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
    </br>
    <v-card class="my-2">
        <v-card-title>Flights list</v-card-title>
    <v-data-table :headers="headers" :items="flights" :items-per-page="5" class="elevation-1">
      <template>
        <v-btn class="my-2" small color="primary" @click="onButtonClick(props.item)">Flight details</v-btn>
      </template>
      <!-- <template slot="headers" slot-scope="props">
    <tr>
          <th v-for="headers in props.headers" :key="headers.value">
            {{ headers.value }}
          </th>
        </tr>
      </template>
      <template slot="drones" slot-scope="props">
        <tr>
          <td v-for="drones in props.drones" :key="drones.value">
            <v-edit-dialog lazy>
              {{ drones.value }}
              <v-text-field
                :value="drones.value"
                single-line
                counter>
              </v-text-field>
            </v-edit-dialog>
          </td>
        </tr>
      </template>-->
    </v-data-table>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import axios from "axios";

export default {
  name: "DroneDetails",
  data() {
    return {
      headers: [
        {
          text: "Flight ID",
          align: "start",
          sortable: false,
          value: "flightId"
        },
        { text: "Date", value: "date" },
        { text: "Time", value: "time" },
        { text: "Home coords", value: "homeCoords" },
        { text: "Region flown", value: "regionFlown" },
        { text: "Flight type", value: "flightType" },
        { text: "Flight time", value: "flightTime" },
        { text: "", value: "flightInfo", sortable: false }
      ],
      flights: [
        {
          flightId: 1,
          date: "16/07/2020",
          time: "421",
          homeCoords: "39 71 45 32",
          regionFlown: "Mauritania",
          flightType: "Radar",
          flightTime: "453"
        },
        {
          flightId: 2,
          date: "16/07/2020",
          time: "421",
          homeCoords: "39 71 45 32",
          regionFlown: "Mauritania",
          flightType: "Radar",
          flightTime: "453"
        }
      ]
    };
  },
  components: {
    Navbar,
    Header
  }
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
  margin-bottom: -30px;
}
</style>