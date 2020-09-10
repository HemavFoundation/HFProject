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
           <td>{{ props.item.date }}</td>
           <td>{{ props.item.time }}</td>
           <td>{{ props.item.homeCoords }}</td>
           <td>{{ props.item.regionFlown }}</td>
           <td>{{ props.item.flightType }}</td>
           <td>{{ props.item.flightTime }}</td>
        </template>
        <template v-slot:item.flightInfo>
        <v-btn class="my-2" small color="primary" @click="onButtonClick(props.item)">
          Go to flight details
        </v-btn>
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
            { text: "Date", value: "date" },
            { text: "Time", value: "time" },
            { text: "Home coords", value: "homeCoords" },
            { text: "Region flown", value: "regionFlown" },
            { text: "Flight type", value: "flightType" },
            { text: "Flight time", value: "flightTime" },
            { text: "", value: "flightInfo", sortable: false }
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