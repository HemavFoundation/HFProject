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
<template v-slot:item.addZip>
      <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" style="color:white;" v-bind="attrs" v-on="on">Add ZIP</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Add drone ZIP</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-file-input chips type="file" accept=".zip,.rar" label="File input" required></v-file-input>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                <v-btn color="primary" text @click="dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
        dialog: false,
        headers:[
            { text: "Date", value: "date" },
            { text: "Time", value: "time" },
            { text: "Home coords", value: "homeCoords" },
            { text: "Region flown", value: "regionFlown" },
            { text: "Flight type", value: "flightType" },
            { text: "Flight time", value: "flightTime" },
            { text: "", value: "addZip", sortable: false }
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