<template>
  <div>
    <Header />
    <Navbar />
    <div class="my-2 mx-2">
      <router-link to="RegisterDrone">
        <v-btn depressed small color="primary" class="droneListMarginLeft mx-2"
          >Create a drone</v-btn
        >
      </router-link>

      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            depressed
            small
            color="primary"
            style="color: white"
            v-bind="attrs"
            v-on="on"
            >Upload Flights</v-btn
          >
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Upload flight</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <small>Instead you can upload the json file</small>
                <v-col cols="12">
                  <v-file-input
                    chips
                    type="file"
                    accept=".json,application/json"
                    label="File input"
                    v-model="chosenFile"
                    required
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">Close</v-btn>
            <v-btn color="primary" text @click="importTxt">Upload</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <data-table tableEntry="dronelist" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import axios from "axios";
import dataTable from "@/components/DroneListTable.vue";

export default {
  name: "DroneList",
  components: {
    Navbar,
    Header,
    dataTable,
  },
  data: () => ({
    dialog: false,
    chosenFile: null,
    data: null,
  }),
  methods: {
    importTxt() {
      if (!this.chosenFile) {
        this.data = "No File Chosen";
      }
      var reader = new FileReader();
      reader.readAsText(this.chosenFile);
      reader.onload = () => {
        this.data = reader.result;
        this.fetchImport(this.data)
      };
    },
    fetchImport(data) {
      axios
        .post("http://localhost:3001/api/flight", data)
        .then(function (response) {
          console.log("@@ ");
        });
    },
  },
};
</script>

<style scoped>
.droneListMarginLeft {
  margin-left: 20px;
}
</style>