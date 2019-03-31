<template>
  <div class="row justify-center items-center fit">
    <div class="col"><span class="header-font score-size">{{home}}</span></div>
    <div class="col"><span class="header-font score-x">x</span></div>
    <div class="col"><span class="header-font score-size">{{away}}</span></div>
  </div>
</template>
<script>
  export default {
    name: 'ScoreBoard',
    props: {
      away: {
        type: Number,
        require: false,
        default: 0,
      },
      home: {
        type: Number,
        require: false,
        default: 0,
      },
    },
  }
</script>
<style scoped>
  .score-size {
    font-size: 2.5rem;
  }
  .score-x{
    font-size: 1.5rem;
  }

</style>
