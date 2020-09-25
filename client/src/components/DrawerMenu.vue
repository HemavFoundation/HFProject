<template>
<div>
  <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      dark
      class="primary"
      style="
      z-index: 2
      "
    >
      <v-list
          dense
          nav
          class="py-0" 
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Drones on flight:</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
        </v-list>
        <v-row justify="center">
  <v-expansion-panels popout focusable>
    <v-expansion-panel
      v-for="item in items"
      :key="item.drone"
      class="dronesOnFlight">
      <v-expansion-panel-header>{{ item.drone }}</v-expansion-panel-header>
      <v-expansion-panel-content>
       <p class="drawerDetails">Last updated:</p>
       <p class="drawerDetails">Status:</p>
       <p class="drawerDetails">Position:</p>
       <p class="drawerDetails">Flight time:</p>
       <p class="drawerDetails">ETA:</p>
      <v-btn x-small color="primary">Update info</v-btn>
      <div class="divider"/>
      <v-btn x-small color="primary">Give an order</v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
        </v-row>
    </v-navigation-drawer>

       
      </div>
</template>

<script>
import Map from '@/components/Map.vue';
  export default {
    name:'DrawerMenu',
  components: {
    Map
  },
    data () {
      return {
        drawer: false,
        items: [
          { drone: 'HP2-078'},
          { drone: 'HP2-007' },
          { drone: 'HP2-122' },
          { drone: 'HP2-031' }
        ],
        color: 'primary',
        permanent: true,
        expandOnHover: true,
      }
    },
  }
</script>

<style scopped>
button, input, select, textarea {
    background-color: white;
    border-style: 5px;
    color: #0E3343;
    font-weight: bold;
}
.v-expansion-panel-content {
    background-color: #FFFFFF;
    color: #000000;
}
.drawerDetails{
  color: #0E3343;
  font-weight: bold;
  line-height: 20px;
}
.divider{
    width:5px;
    height:auto;
    display:inline-block;
}
</style>