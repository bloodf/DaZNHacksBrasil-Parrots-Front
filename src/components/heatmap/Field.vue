<template>
  <q-img
    :id="uid"
    spinner-color="ascent"
    src="statics/field.jpg"
  >
    <q-resize-observer
      @resize="reDraw"
    />
  </q-img>
</template>
<script>
  import { uid, debounce } from 'quasar';
  import heatMapJS from 'heatmap.js';
  import { mapGetters, mapActions } from 'vuex';

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
        blur: .75,
      });
      this.sockets.subscribe('heatmap', function (data) {
        this.addHeatMap(data);
      });
    },
    watch: {
      heatMapData(newValue) {
        this.addData(newValue);
        this.heatMap.repaint();
      },
    },
    computed: {
      ...mapGetters('Player', [
        'heatMapData',
      ]),
    },
    methods: {
      ...mapActions('Player', ['addHeatMap']),
      reDraw: debounce(function () {
        this.heatMap.repaint();
      }, 250),
      addData(dataPoint) {
        this.heatMap.addData(dataPoint);
        this.heatMap.repaint();
      },
    },
  }
</script>
