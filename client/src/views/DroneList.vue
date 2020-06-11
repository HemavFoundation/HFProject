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
    <v-data-table
    :headers="headers"
    :items="drones"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:item.droneInfo="props">
        <v-btn class="my-2" small color="primary" @click="onButtonClick(props.item)">
          Go to drone info
        </v-btn>
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
      </template> -->
  </v-data-table>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import axios from 'axios';

export default {
  name: "DroneList",
  data () {
      return {
        headers: [
          {
            text: 'ID Plate',
            align: 'start',
            sortable: false,
            value: 'idPlate',
          },
          { text: 'Owner', value: 'owner' },
          { text: 'Pilot', value: 'pilot' },
          { text: 'Country', value: 'country' },
          { text: 'State', value: 'state' },
          { text: 'Last flight', value: 'lastFlight' },
          { text: "", value: "droneInfo", sortable: false }
        ],
        drones: [
            {
    idPlate: 6856484654,
    owner: "Hemav",
    pilot: "James",
    country: "Mauritania",
    state: "Ready to flight",
    lastFlight: "27/4/2020"
    },
    {
        idPlate: 6856484654,
        owner: "Hemav",
        pilot: "Joan",
        country: "Spain",
        state: "Ready to flight",
        lastFlight: "24/4/2020"
    }],
      }
    },
    // mounted(){
    //   axios.get('../droneList.json')
    //   .then(response => (this.drones = response))
    //   .then(console.log(response));
    //   },
  components: {
    Navbar,
    Header
  }
};
</script>

<style scoped>
.droneListMarginLeft{
margin-left: 20px;
}
</style>