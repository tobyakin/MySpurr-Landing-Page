<template>
  <div>
    <l-map :zoom="zoom" :center="center" class="!z-20" style="height: 500px; width: 100%">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-geo-json
        v-if="show"
        :geojson="geojson"
        :options="options"
        :options-style="styleFunction"
      />
      <l-marker :lat-lng="marker" />
    </l-map>
  </div>
</template>

<script>
import {
  LRectangle,
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LGeoJson,
} from "@vue-leaflet/vue-leaflet";
import { latLng } from "leaflet";

import "leaflet/dist/leaflet.css";

export default {
  name: "sampl-map",
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
  },
  props: { lat: String, lng: String },

  data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 6,
      center: [48, -1.219482],
      geojson: null,
      fillColor: "#e4ce7f",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
      marker: latLng(this.lat, this.lng),
    };
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction,
      };
    },
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 1,
        };
      };
    },
    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.bindTooltip(
          "<div>code:" +
            feature.properties.code +
            "</div><div>nom: " +
            feature.properties.nom +
            "</div>",
          { permanent: false, sticky: true }
        );
      };
    },
  },
  async created() {
    this.loading = true;
    const response = await fetch(
      "https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson"
    );
    const data = await response.json();
    this.geojson = data;
    this.loading = false;
  },
};
</script>
<style>
.leaflet-container {
  height: 400px !important;
}

.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
  @apply !w-full !rounded !h-[200px];
}
.leaflet-control {
  @apply !z-10;
}
.leaflet-touch .leaflet-bar a {
  @apply !z-10 !w-[20px] !h-[20px] leading-3 p-1 text-[12px];
}
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
  @apply border-[1px];
}
</style>
