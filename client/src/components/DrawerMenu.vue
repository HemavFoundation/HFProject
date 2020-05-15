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

          <v-list-item
            v-for="item in items"
            :key="item.drone"
            link
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.drone }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
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