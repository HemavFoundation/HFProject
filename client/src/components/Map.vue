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
      <v-btn color="secondary" v-on:click="saveLatLot()">Start</v-btn>
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

const dataTest = [{lat: 50.5, lon: 30.5}, {lat: 70.5, lon: 50.5}, {lat: 30.5, lon: 5.5} ,{lat: 41.5, lon: 2.5}]

let intervalCounter = 0
let latitude = 0
let longitude = 0
const intervalId = setInterval(function() {
  // here we call recieveLocation function
  //console.log("interval", intervalCounter)
  latitude = dataTest[intervalCounter].lat
  longitude = dataTest[intervalCounter].lon
  intervalCounter +=1
}, 10 * 1000); // 60 * 1000 milsec = 1 min.
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
  beforeCreate() {
    console.log('- BeforeCreate')
  },
  data () {
    //console.log(this.$store.state.map) access to state to pass latitude and longitude to marker
    console.log(this.$store.state.map.lat, this.$store.state.map.lon)
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 3,
      center: [22.917923, 20.126953],
      bounds: null,
      marker: L.latLng(this.$store.state.map.lat, this.$store.state.map.lon),
      icon: L.icon({
        iconUrl: require('../../public/img/icons/drone-map.png'),
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
      console.log(latitude)
      console.log(longitude)
      this.setLat(dataTest[intervalCounter].lat)
      this.setLon(dataTest[intervalCounter].lon)
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
  },
  created() {
    console.log('- Created')
    console.log(this)
    this.setLat(latitude)
    this.setLon(longitude)
  },
  beforeMount() {
    console.log(`- BeforeMount`)
    console.log(this)
  },
  mounted() {
    console.log(`- Mounted`);
    console.log(this)
  }
}
</script>