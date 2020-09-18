<template>
  <div>
    <Header />
    <Navbar />
    <div class="my-2 mx-2">
      <router-link to="RegisterDrone">
      <v-btn depressed small color="primary" class="droneListMarginLeft mx-2">Create a drone</v-btn>
      </router-link>
      
      <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed small color="primary" style="color:white;" v-bind="attrs" v-on="on">Upload Flights</v-btn>
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
  data: () => ({
    dialog: false,
  }),
};
</script>

<style scoped>
.droneListMarginLeft{
margin-left: 20px;
}
</style>