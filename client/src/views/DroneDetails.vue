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
        <v-tab>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" style="color:white;" v-bind="attrs" v-on="on">Upload Flights</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Upload flight</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field label="Date" hint="Flight date day/month/year" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field label="Time" hint="In seconds" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field label="Home coords" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field label="Region Flown" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field label="Flight type" hint="Type of flight" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field label="Flight time" required></v-text-field>
                    </v-col>
                    <small>Instead you can upload the json file</small>
                    <v-col cols="12">
                      <v-file-input chips type="file" accept=".json,application/json" label="File input" required></v-file-input>
                    </v-col>
                  </v-row>
                </v-container>
                <small>All files are required</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                <v-btn color="primary" text @click="dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-tab>
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
  data: () => ({
    dialog: false,
  }),
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