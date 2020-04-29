<template>

  <div style="height: 350px;">
    <div style="height: 15%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div>
    <!-- Style props (position, left, transform) coded in order to center the map-->
    <l-map
      style="width: 80%;
      position: relative; 
      left: 50%;
      transform: translateX(-50%);"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <!-- For representing a rectangle in a specific area-->
      <l-rectangle :bounds="rectangle.bounds" :l-style="rectangle.style"></l-rectangle>
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LRectangle } from 'vue2-leaflet';
export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LRectangle
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 3,
      center: [22.917923, 20.126953],
      bounds: null,
      //rectangle example. Component and import must be added in order to work
      rectangle: {
        bounds: [[9.173621, 47.484155], [9.109723, 47.431965]],
        style: { color: 'green', weight: 3 }
      }
    };
  },
  methods: {
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