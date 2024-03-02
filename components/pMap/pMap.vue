<template>
  <div class="p-map">
    <div class="p-map__container">
      <yandex-map
          v-model="map"
          :settings="{
        location: {
          center: [ 39.853910, 57.617739],
          zoom: 16,
        },
        behaviors: ['drag']
      }"
          width="100%"
          height="620px"
      >
        <yandex-map-marker :settings="{coordinates: [39.853910, 57.617739]}"> <div class="marker"/></yandex-map-marker>

        <yandex-map-default-scheme-layer/>
        <yandex-map-default-features-layer />
      </yandex-map>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
import {VueYandexMaps, YandexMap, YandexMapDefaultSchemeLayer, YandexMapMarker, YandexMapDefaultFeaturesLayer} from 'vue-yandex-maps';
import type { YMap } from '@yandex/ymaps3-types';

const map = shallowRef<null | YMap>(null);
</script>

<style scoped lang="scss">
.marker {
  position: relative;
  width: 20px;
  height: 20px;
  background: #ff0000;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #fff;
  font-weight: bold;
  line-height: 20px;
}
.p-map {
  position: relative;
  z-index: 30;
  clip-path: polygon(0 0, 100% 60px, 100% 100%, 0 100%);
  margin-top: -60px;
}
</style>