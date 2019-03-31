<template>
  <div class="row q-mb-md">
    <div class="col text-left">
      <team-shield
        src="https://s.hs-data.com/bilder/wappen/mittel/558.gif"
      />
    </div>
    <div class="col text-center">
      <score-board
        :away="awayGoals"
        :home="homeGoals"
      />
    </div>
    <div class="col text-right">
      <team-shield
        src="https://s.hs-data.com/bilder/wappen/mittel/750.gif"
      />
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import ScoreBoard from './Score';
  import TeamShield from '../../team/TeamShield';

  export default {
    name: 'MatchScore',
    components: { ScoreBoard, TeamShield },
    computed: {
      ...mapGetters('Team', [
        'awayGoals',
        'homeGoals',
      ]),
    },
  };
</script>
