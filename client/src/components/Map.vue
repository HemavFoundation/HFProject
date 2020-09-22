<template>

  <div style="
        width: 100%;
        height: 500px;
        z-index: 1;
        position: relative;
  ">
    <div style="height: 5%; margin: 1rem;">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
      <v-btn color="secondary" v-on:click="saveLatLot()">Test</v-btn>
    </div>
    <!-- Style props (position, left, transform) coded in order to center the map-->
    <l-map
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :latLng="marker" :icon="icon"></l-marker>
    </l-map>
    </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LRectangle, LIcon } from 'vue2-leaflet';
import { mapActions, mapGetters, mapState } from 'vuex'

const dataTest = [{lat: 50.5, lon: 30.5}, {lat: 70.5, lon: 50.5}, {lat: 90.5, lon: 70.5} ,{lat: 110.5, lon: 90.5}]

let intervalCounter = 0
const intervalId = setInterval(function() {
  // here we call recieveLocation function
  intervalCounter +=1
  console.log("intervalCounter", intervalCounter)
  
}, 6 * 1000); // 60 * 1000 milsec = 1 min.
console.log(intervalId)

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LRectangle,
    LIcon
  },
  data () {
    //console.log(this.$store.state.map) access to state to pass latitude and longitude to marker
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 3,
      center: [22.917923, 20.126953],
      bounds: null,
      marker: L.latLng(dataTest[intervalCounter].lat, dataTest[intervalCounter].lon),
      icon: L.icon({
        iconUrl: "https://www.flaticon.com/svg/static/icons/svg/897/897097.svg",
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      })
    };
  },
  computed: {
    ...mapGetters({
      lat: "map/getLat",
      lon: "map/getLon"
    })
  },
  methods: {
    ...mapActions({
      setLat: "map/setLat",
      setLon: "map/setLon",
    }),
    saveLatLot() {
      console.log("function", this)
      //access to dataTest to save latitude and longitude
    },
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    }
  }
}
</script>