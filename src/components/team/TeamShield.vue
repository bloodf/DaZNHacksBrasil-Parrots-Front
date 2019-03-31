<template>
  <q-img
    spinner-color="ascent"
    :src="src"
    style="height: 80px"
    contain
  />
</template>
<script>
  export default {
    name: 'TeamShield',
    props: {
      src: {
        type: String,
        required: true,
      }
    }
  }
</script>
