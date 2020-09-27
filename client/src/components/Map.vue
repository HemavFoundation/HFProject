  <template>
  <div
    style="
        width: 100%;
        height: 500px;
        z-index: 1;
        position: relative;
  ">
    <!-- Style props (position, left, transform) coded in order to center the map-->
    <l-map
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker v-for="marker, index in dronesMarkers" :lat-lng="marker" :icon="icon">
        <l-popup :options="{ permanent: false, interactive: true }">
          <div>
            <p class="drawerDetails">Last updated:</p> 
            <p class="drawerDetails">Status:</p> 
            <!-- Status: Get lat. If lat > 10m show Flying, else show Landed -->
            <p class="drawerDetails">Position:</p> {{ marker.lat }} - {{ marker.lon }}
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import L from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LRectangle,
  LIcon,
  LPopup
} from "vue2-leaflet";
import { mapActions, mapGetters, mapState } from "vuex";
import axios from "axios";

const MINUTES_TO_FETCH_LOCATIONS = 0.5

export default {
  name: "Map",
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
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 3,
      center: [22.917923, 20.126953],
      bounds: null,
      icon: L.icon({
        iconUrl: require("../../public/img/icons/drone-map.png"),
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      })
    };
  },
  computed: {
    ...mapGetters({
      dronesMarkers: "map/getDronesMarkers"
    })
  },
  methods: {
    ...mapActions({
      setDronesMarkers: "map/setDronesMarkers"
    }),
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    getLastFlightsLocations() {
      axios
        .get("http://localhost:3001/api/lastDronesLocations")
        .then(response => {
          if (response.data.length > 0) {
            const locations = response.data;
            this.setDronesMarkers(locations);
          }
        });
    }
  },
  created() {},
  beforeMount() {},
  mounted() {
    this.intervalId = setInterval(this.getLastFlightsLocations, MINUTES_TO_FETCH_LOCATIONS * 60000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId); //kill setInterval when the component is detroyed
  }
};
</script>