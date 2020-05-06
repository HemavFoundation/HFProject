<template>
<div id="app">
  <v-app id="tabla">
    <v-card>
      <v-card-title>
        Status
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="flight_status"
        :search="search"
      >
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.id_plate}}</td>
          <td class="text-xs-right">{{ props.item.owner}}</td>
          <td class="text-xs-right">{{ props.item.pilot }}</td>
          <td class="text-xs-right">{{ props.item.country }}</td>
          <td class="text-xs-right">{{ props.item.state}}</td>
          <td class="text-xs-right">{{ props.item.last_flight}}</td>
        </template>
        <template v-slot:no-results>
          <v-alert :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</div>

</template>
