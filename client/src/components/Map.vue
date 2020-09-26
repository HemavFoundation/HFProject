  Xº<template>

  <div style="
        width: 100%;
        height: 500px;
        z-index: 1;
        position: relative;
  " id="socketMap">
    <div style="height: 5%; margin: 1rem;">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
      <span>Latitude: {{ lat }}</span>
      <span>Longitude: {{ lon }}</span>
       <v-btn class="my-2" small color="secondary" @click="clickButton">Socket</v-btn>
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
      <l-marker :latLng="marker" :icon="icon">
        <l-popup :options="{ permanent: false, interactive: true }">
           <div>
            
           </div>
        </l-popup>
      </l-marker>
    </l-map>
    </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LRectangle, LIcon, LPopup } from 'vue2-leaflet';
import { mapActions, mapGetters, mapState } from 'vuex'

const dataTest = [{lat: 50.5, lon: 30.5}, {lat: 70.5, lon: 50.5}, {lat: 30.5, lon: 5.5} ,{lat: 41.5, lon: 2.5}, {lat: 31.5, lon: 4.5}]

let intervalCounter = 0

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LRectangle,
    LIcon,
    LPopup
  },
  beforeCreate() {
    // console.log('- BeforeCreate')
    // console.log(this.$store)
  },
  data () {
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
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    customEmit: function (data) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
      console.log(data)
    }
  },
  computed: {
    ...mapGetters({
      lat: "map/getLat",
      lon: "map/getLon"
    }),
  },
  methods: {
    ...mapActions({
      setLat: "map/setLat",
      setLon: "map/setLon",
    }),
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    },
    todo: function(){
            const self = this
            this.intervalId = setInterval(function() {
              // here we call recieveLocation function
              if(intervalCounter < 5){
                self.setLat(dataTest[intervalCounter].lat)
                self.setLon(dataTest[intervalCounter].lon)
                self.marker = L.latLng(self.lat, self.lon)
              }

              intervalCounter +=1
            }, 5 * 1000); // 60 * 1000 milsec = 1 min.
            //console.log(this.intervalId)
    },
    clickButton: function (data){
      // console.log(this)
      // console.log(data)
      //this.$socket.emit('emit_method', data)
    }
  },
  created() {
    // console.log('- Created')
    // console.log(this)
  },
  beforeMount() {
    // console.log(`- BeforeMount`)
    // console.log(this)
  },
  mounted() {
    // console.log(`- Mounted`);
    // console.log(this)
    this.todo()
  },
  beforeDestroy () {
    // console.log("beforeDestroy")
    clearInterval(this.intervalId) //kill setInterval when the component is detroyed
  }
}
</script>