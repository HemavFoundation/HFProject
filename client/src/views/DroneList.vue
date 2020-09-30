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
            <v-btn color="primary" text @click="importTxt">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr class="text-left">
            <th scope="col">IdPlate</th>
            <th scope="col">Owner</th>
            <th scope="col">Pilots Assigned</th>
            <th scope="col">Person In Charge</th>
            <th scope="col">Manufacturer</th>
            <th scope="col">MadeDate</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="drone in drones" :key="drone.IdPlate">
            <td>{{ drone.IdPlate }}</td>
            <td>{{ drone.Owner }}</td>
            <td>{{ drone.PilotsAssigned }}</td>
            <td>{{ drone.PersonInCharge }}</td>
            <td>{{ drone.Manufacturer }}</td>
            <td>{{ drone.MadeDate }}</td>
            <td>{{ drone.Country }}</td>
            <td>
              <router-link to="dronedetails">
                <v-btn
                  class="my-2"
                  small
                  color="primary"
                  @click="onButtonClick(props.item)"
                >
                  Go to drone info
                </v-btn>
              </router-link>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import axios from "axios";

export default {
  name: "DroneList",
  components: {
    Navbar,
    Header,
  },
  data: () => ({
    dialog: false,
    chosenFile: null,
    data: null,
    drones: [],
  }),
  mounted: function () {
    axios
      .get("http://localhost:3001/api/drone")
      .then((response) => {
        this.drones = response.data.drones;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    importTxt() {
      if (!this.chosenFile) {
        this.data = "No File Chosen";
      }
      var reader = new FileReader();
      reader.readAsText(this.chosenFile);
      reader.onload = () => {
        this.data = JSON.parse(reader.result);
        this.fetchImport(this.data);
      };
    },
    fetchImport(data) {
      var self = this;
      axios
        .post(process.env.VUE_APP_API + "/api/flight", data)
        .then(function (response) {
          console.log("Uploaded JSON");
          self.dialog = false;
          //TODO: GET(fetch) && SET for upload DRONE LIST
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