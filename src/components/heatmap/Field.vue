<template>
  <q-img
    :id="uid"
    spinner-color="ascent"
    src="statics/field.jpg"
  />
</template>
<script>
  import { uid } from 'quasar';
  import heatMapJS from 'heatmap.js';

  export default {
    name: 'FieldHeatMap',
    data: () => ({
      uid: uid(),
      heatMap: null,
    }),
    mounted() {
      this.heatMap = heatMapJS.create({
        container: document.getElementById(this.uid),
        radius: 10,
        maxOpacity: .5,
        minOpacity: 0,
        blur: .75
      });
    },
    methods: {
      addData(dataPoint){
        this.heatMap.addData(dataPoint);
        this.heatMap.repaint();
      }
    }
  }
</script>
