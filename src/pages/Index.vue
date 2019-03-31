<template>
  <q-page class="flex bg-dazn"
          :class="{
            'justify-end': !$q.screen.lt.md,
            'justify-center': $q.screen.lt.md,
            'bg-dazn-mobile': $q.screen.lt.md,
            'bg-dazn-desktop': !$q.screen.lt.md
          }">
    <q-btn
      :color="$q.screen.lt.md ? 'accent' : 'primary'"
      class="self-center no-shadow no-border-radius"
      :class="`btn-statistics${$q.screen.lt.md ? '-mobile' : '-desktop'}`"
      :ripple="false"
      @click="dialogOpen = !dialogOpen"
    >
      <q-icon
        v-if="!$q.screen.lt.md"
        name="fa fa-angle-left" />
      <span v-else class="text-primary">
       <strong>View Match Information</strong>
      </span>
    </q-btn>
    <dialog-base
      v-model="dialogOpen"
    />
  </q-page>
</template>

<style>
</style>

<script>
  import DialogBase from '../components/dialog/Dialog';

  export default {
    name: 'PageIndex',
    components: { DialogBase },
    data: () => ({
      dialogOpen: false,
    }),
  };
</script>
<style scoped>
  .bg-dazn {
    background-attachment: scroll;
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bg-dazn-desktop {
    background-image: url(~assets/bg.jpg);
  }

  .bg-dazn-mobile {
    background-image: url(~assets/bg-mobile.jpg);
  }
  .btn-statistics-mobile{
    width: 90%;
    font-size: 1.2rem;
    position: relative;
    margin-top: 20px;
  }
  .btn-statistics-desktop {
    height: 120px;
    padding: 0 5px;
  }
</style>
