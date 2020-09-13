<template>
   <div>
      <v-data-table
      :headers="headers"
      :items="dataNumbers"
      :rows-per-page-items="rowsPerPageItems"
      :search="search"
      :custom-filter="customFilter"
      class="elevation-1"
      >
        <template slot="items" slot-scope="props">
           <td>{{ props.item.IDPlate }}</td>
           <td>{{ props.item.Owner }}</td>
           <td>{{ props.item.Pilot }}</td>
           <td>{{ props.item.Country }}</td>
           <td>{{ props.item.State }}</td>
           <td>{{ props.item.LastFlight }}</td>
        </template>
        <template v-slot:item.droneInfo>
          <router-link to="dronedetails">
        <v-btn class="my-2" small color="primary" @click="onButtonClick(props.item)">
          Go to drone info
        </v-btn>
        </router-link>
      </template>
       </v-data-table>
    </div>
</template>
<script>
import * as jsonData from '../assets/data'

export default {
    props:{
        tableEntry: {type: String, required: true}
    },
    jsonData,
    data: function() {
        return{
        headers:[
          { text: 'IDPlate', value: 'idPlate' },
          { text: 'Owner', value: 'owner' },
          { text: 'Pilot', value: 'pilot' },
          { text: 'Country', value: 'country' },
          { text: 'State', value: 'state' },
          { text: 'Last flight', value: 'lastFlight' },
          { text: "", value: "droneInfo", sortable: false }
        ]
      }
    },
    computed:{
        dataNumbers:{
            get(){
                var dataObjects = jsonData[this.tableEntry]
                return dataObjects
            }
        }
    },
}
</script>