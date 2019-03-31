<template>
  <q-page class="q-pa-md">
    <match-score />
    <div class="row">
      <match-status
        title="GOAL ATTEMPTS"
        :value="homeTeam.goalAttempts"
      />
      <match-status
        title="GOAL ATTEMPTS"
        :value="awayTeam.goalAttempts"
      />
      <match-status
        title="BALL POSSESSION"
        :value="`${homeTeam.ballPossession}%`"
      />
      <match-status
        title="BALL POSSESSION"
        :value="`${awayTeam.ballPossession}%`"
      />

      <match-status
        title="CORNER KICKS"
        :value="homeTeam.cornerKicks"
      />
      <match-status
        title="CORNER KICKS"
        :value="awayTeam.cornerKicks"
      />
      <match-status
        title="CROSS ATTACKS"
        :value="homeTeam.crossAttack"
      />
      <match-status
        title="CROSS ATTACKS"
        :value="awayTeam.crossAttack"
      />
      <match-status
        title="COUNTER ATTACKS"
        :value="homeTeam.counterAttack"
      />
      <match-status
        title="COUNTER ATTACKS"
        :value="awayTeam.counterAttack"
      />
      <match-status
        title="PASS ACCURACY"
        :value="`${homeTeam.passAccuracy}%`"
      />
      <match-status
        title="PASS ACCURACY"
        :value="`${awayTeam.passAccuracy}%`"
      />
      <match-status
        title="FOULS"
        :value="homeTeam.fouls"
      />
      <match-status
        title="FOULS"
        :value="awayTeam.fouls"
      />

    </div>
  </q-page>
</template>
<script>
  import MatchScore from '../../statistics/match/MatchScore';
  import MatchStatus from '../../common/DataStatus';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Match',
    components: { MatchScore, MatchStatus },
    async beforeMount() {
      await this.getMatch();
      this.sockets.subscribe('event', (data) => {
        if (data.type === 'GOAL') {
          this.addGoal(data.team)
        }
        if (data.type === 'FOUL') {
          this.addFoul(data.team);
        }
        if (data.type === 'BALL_POSSESSION') {
          this.addBallPossesion(data.team);
        }
        if (data.type === 'CORNER_KICK') {
          this.addCornerKick(data.team);
        }
        if (data.type === 'CROSS_ATTACK') {
          this.addCrossAttack(data.team);
        }
        if (data.type === 'COUNTER_ATTACK') {
          this.addCounterAttack(data.team);
        }
      });
    },
    computed: {
      ...mapGetters('Match', [
        'loading',
        'homeTeam',
        'awayTeam',
      ]),
    },
    methods: {
      ...mapActions('Match', [
        'getMatch',
        'addGoal',
        'addFoul',
        'addKeyPass',
        'addPass',
        'addIntercept',
        'addBallPossesion',
        'addAssist',
        'addCornerKick',
        'addCrossAttack',
        'addCounterAttack',
        'addDribble',
      ]),
    },
  }
</script>
