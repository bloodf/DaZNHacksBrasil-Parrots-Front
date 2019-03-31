<template>
  <q-dialog
    content-style="padding: 0px"
    :value="value"
    position="right"
    @input="$emit('input', $event)">
    <q-layout
      view="lhh LpR lff"
      container
      style="height: 100vh; border-radius: 0px;"
      :style="$q.screen.lt.md ? 'min-width: 100%' : 'min-width: 750px'"
      class="no-shadow bg-primary"
    >
      <q-header class="bg-primary">
        <q-toolbar>
          <q-toolbar-title class="header-font">{{activeTab.header}}</q-toolbar-title>
          <q-btn flat @click="$emit('input', false)" dense icon="close" />
        </q-toolbar>
      </q-header>
      <q-footer>
        <q-tabs
          v-model="tab"
          switch-indicator
          inline-label
          indicator-color="accent"
          align="justify"
          class="bg-tabs no-shadow no-border-radius full-width justify-between"
        >
          <q-tab
            v-for="tab in tabs"
            :key="tab.name"
            :name="tab.name"
            :icon="tab.icon"
            :label="$q.screen.lt.sm ? '' : tab.title"
            :ripple="false"
          />
        </q-tabs>
      </q-footer>
      <q-page-container
        class="text-white"
      >
        <component :is="activeTab.component"
                   class="fit" />
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>
<script>
  import HistoryStream from '../history/Stream';
  import Player from '../player/Player';
  import Match from './statistics/Match';
  import Rooter from './statistics/Rooster';

  export default {
    name: 'DialogBase',
    props: {
      value: {
        type: Boolean,
        required: true,
      },
    },
    data: () => ({
      tab: 'match',
      tabs: [
        {
          name: 'match',
          title: 'Match',
          header: 'Match Statistics',
          icon: 'fas fa-futbol',
          component: Match,
        },
        {
          name: 'roster',
          title: 'Roster',
          header: 'Match Roster',
          icon: 'fas fa-users',
          component: Rooter,
        },
        {
          name: 'player',
          title: 'Player',
          header: 'Player Statistics',
          icon: 'fas fa-user',
          component: Player,
        },
        {
          name: 'history',
          title: 'History',
          header: 'Match History',
          icon: 'fas fa-stream',
          component: HistoryStream,
        },
      ],
    }),
    computed: {
      activeTab() {
        return this.tabs.find(t => t.name === this.tab);
      },
    },
  };
</script>
<style>
  .q-dialog__inner--minimized {
    padding: 0 !important;
  }

  .q-dialog__inner--minimized > div {
    max-height: 100vh;
  }

  .bg-tabs {
    background-color: #0C0F13;
  }

  .q-tab__content {
    min-height: 60px !important;
  }
</style>
