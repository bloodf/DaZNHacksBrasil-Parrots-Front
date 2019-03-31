<template>
  <q-dialog
    :value="value"
    @input="$emit('input', $event)">
    <q-card>
      <q-card-section class="row items-center">
        <div class="text-h6">{{title}}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section class="q-pa-lg">
        <q-video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
  export default {
    name: 'VideoHighlights',
    props: {
      value: {
        type: Boolean,
        required: true,
        default: false,
      },
      title: {
        type: String,
        required: false,
        default: 'Event Highlight',
      },
      videoSrc: {
        type: String,
        required: false,
        default: 'Event Highlight',
      },
    },
    data: () => ({
      video: [
        {
          label: 'Tears of Steel',
          sources: [
            {
              src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              type: 'video/mp4',
            },
          ],
        },
      ],
    }),
  }
</script>
