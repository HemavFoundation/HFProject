<template>
  <v-content>
    <Header />
    <Navbar />
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Register a new drone</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form v-on:submit="registerDrone">
                <v-text-field label="ID Plate" name="IdPlate" id="IdPlate" type="text" />
                <v-text-field
                  label="Manufacturer"
                  name="Manufacturer"
                  id="Manufacturer"
                  type="text"
                />
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      label="Made date"
                      name="MadeDate"
                      id="MadeDate"
                      v-model="date"
                      readonly
                      v-on="on"
                    />
                  </template>

                  <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                </v-menu>
                <v-text-field label="Owner" id="Owner" name="Owner" type="text" />
                <v-text-field
                  label="Person in charge"
                  name="PersonInCharge"
                  id="PersonInCharge"
                  type="text"
                />
                <v-text-field
                  label="Pilots assigned"
                  name="PilotsAssigned"
                  id="PilotsAssigned"
                  type="text"
                />
                <v-select
                  v-model="country"
                  :items="countryData"
                  item-text='name'
                  item-value='code'
                  menu-props="auto"
                  label="Country"
                  name="Country"
                  id="Country"
                  hide-details
                  single-line
                ></v-select>

              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-row align="center">
                <v-btn color="primary" class="droneListMarginLeft" v-on:click="registerDrone()">Save</v-btn>
                <v-btn color="primary" class="droneListMarginLeft" v-on:click="back()">Back</v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import axios from "axios";
import router from '../router';
import countryData from '../assets/data/countries.json';

export default {
  name: "RegisterDrone",
  methods: {
    back() {
      this.$router.go(-1);
    },
    registerDrone() {
      let IdPlate = document.getElementById("IdPlate").value;
      let Manufacturer = document.getElementById("Manufacturer").value;
      let MadeDate = document.getElementById("MadeDate").value;
      let Owner = document.getElementById("Owner").value;
      let PersonInCharge = document.getElementById("PersonInCharge").value;
      let PilotsAssigned = document.getElementById("PilotsAssigned").value;
      let Country = document.getElementById("Country").value;
        let data = {
          IdPlate: IdPlate,
          Manufacturer: Manufacturer,
          MadeDate: MadeDate,
          Owner: Owner,
          PersonInCharge: PersonInCharge,
          PilotsAssigned: PilotsAssigned,
          Country: Country
        };
        axios
        //Use .create to make authorized posts through headers + token
        .create({
            baseURL: 'http://localhost:8080',
            headers: {
                'authorization': 'Bearer ' + this.$store.state.user.token
            }
          })
          .post("http://localhost:3001/api/drone", data)
          .then(function(response) {
            console.log(response.data);
            router.push("/DroneList");
          });

    }
  },
  components: {
    Navbar,
    Header
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      countryData: countryData,
      country:''
    };
  }
};
</script>

<style scoped>
.droneListMarginLeft {
  margin-left: 20px;
}
</style>