<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    this.sockets.subscribe('message', (data) => {
      console.log(data);
    });
  }
};
</script>

<style>
</style>
