<template>
  <q-page class="q-pa-md">
    <match-score />
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col-12 q-mb-sm q-mt-sm">
            <strong class="header-font">ROSTER</strong>
          </div>

          <rooster-player
            v-for="(homePlayer, index) in [...homeTeam, homeManager]"
            :key="homePlayer.name + homePlayer.number"
            class="col-12"
            :name="homePlayer.name"
            :number="homePlayer.number"
            :substitute="homePlayer.substitute || ''"
            :card-fault="homePlayer.cardFault"
            :goals="homePlayer.goals"
            :las-event-minute="homePlayer.lastEventMinute"
          />

        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12 q-mb-sm q-mt-sm">
            <strong class="header-font">ROSTER</strong>
          </div>

          <rooster-player
            v-for="(awayPlayer, index) in [...awayTeam, awayManager]"
            :key="awayPlayer.name + awayPlayer.number"
            class="col-12"
            :name="awayPlayer.name"
            :number="awayPlayer.number"
            :card-fault="awayPlayer.cardFault"
            :substitute="awayPlayer.substitute || ''"
            :goals="awayPlayer.goals"
            :las-event-minute="awayPlayer.lastEventMinute"
            :right-align="$q.screen.lt.md"
          />

        </div>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-6">
        <div class="row">
          <div class="col-12 q-mb-sm q-mt-sm">
            <strong class="header-font">SUBSTITUTES</strong>
          </div>

          <rooster-player
            v-for="(homePlayer, index) in homeSubstitutesTeam"
            :key="homePlayer.name + homePlayer.number"
            class="col-12"
            :name="homePlayer.name"
            :number="homePlayer.number"
            :card-fault="homePlayer.cardFault"
            :substitute="homePlayer.substitute || ''"
            :goals="homePlayer.goals"
            :las-event-minute="homePlayer.lastEventMinute"
          />

        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12 q-mb-sm q-mt-sm" :class="$q.screen.lt.md ? 'text-right' : ''">
            <strong class="header-font">SUBSTITUTES</strong>
          </div>

          <rooster-player
            v-for="(awayPlayer, index) in awaySubstitutesTeam"
            :key="awayPlayer.name + awayPlayer.number"
            class="col-12"
            :name="awayPlayer.name"
            :number="awayPlayer.number"
            :card-fault="awayPlayer.cardFault"
            :substitute="awayPlayer.substitute || ''"
            :goals="awayPlayer.goals"
            :las-event-minute="awayPlayer.lastEventMinute"
            :right-align="$q.screen.lt.md"
          />

        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
  import { mapGetters } from 'vuex';
  import MatchScore from '../../statistics/match/MatchScore';
  import RoosterPlayer from '../../team/RoosterPlayer';

  export default {
    name: 'Rooster',
    components: { RoosterPlayer, MatchScore },
    data: () => ({}),
    computed: {
      ...mapGetters('Team', [
        'homeTeam',
        'awayTeam',
        'homeManager',
        'awayManager',
        'homeSubstitutesTeam',
        'awaySubstitutesTeam',
      ]),
      goalsHome() {
        return this.roosterHome.reduce((acc, curr) => acc + curr.goals, 0);
      },
      goalsAway() {
        return this.roosterAway.reduce((acc, curr) => acc + curr.goals, 0);
      },
    },
  };
</script>
