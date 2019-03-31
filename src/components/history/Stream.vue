<template>
  <div class="row">
    <div class="col-12 stream" v-for="i in 90">
      <q-btn
        flat
        round
        color="white"
        icon="far fa-play-circle"
        class="q-mr-md"
        @click="openVideoDialog({title: `${i} Event`, videoSrc: ''})"
      />
      <span class="eventTime">{{i}}'</span>
      <span class="event">Event</span>
      <q-separator />
    </div>
    <video-highlights
      v-model="videoDialog"
    />
  </div>
</template>
<script>
  import VideoHighlights from '../video/Highlights';

  export default {
    name: 'HistoryStream',
    components: { VideoHighlights },
    data: () => ({
      videoDialog: false,
      videoDialogData: {
        title: '',
        videoSrc: '',
      },
    }),
    methods: {
      openVideoDialog(videoData) {
        this.videoDialogData = {
          ...videoData,
        };
        this.videoDialog = true;
      },
    },
  }
</script>
<style>
  .stream {
    padding: 5px;
  }

  .stream .eventTime {
    flex-direction: column;
    line-height: 1.6rem;
    margin-right: 6px;
    font-weight: bolder;
    font-size: 1.2rem;
  }

  .stream .event {
    font-size: 1rem;
    flex-direction: column;
    line-height: 1.6rem;
  }
</style>
