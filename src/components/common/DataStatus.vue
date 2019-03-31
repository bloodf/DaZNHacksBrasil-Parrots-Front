<template>
  <div class="text-center match-status">
    <p class="title header-font ">{{title}}</p>
    <p class="value header-font ">{{value}}</p>
  </div>
</template>
<script>
  export default {
    name: 'DataStatus',
    props: {
      title: {
        type: String,
        required: false,
        default: '',
      },
      value: {
        type: [String, Number],
        required: false,
        default: '',
      },
    },
  };
</script>
<style scoped>
  .title {
    font-size: 1rem;
    margin: 0;
  }

  .value {
    font-size: 3rem;
    margin: 0;
  }

  .match-status {
    padding-top: 1rem;
    width: 50%;
    border-bottom: 1px solid #595F62;
  }
</style>
