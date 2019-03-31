<template>
  <q-page class="q-pa-md">
    <match-score />
    <div class="row">
      <match-status
        title="TASDA"
        value="0"
      />
      <match-status
        title="TASDA"
        value="0"
      />
      <match-status
        title="TASDA"
        value="0"
      />
      <match-status
        title="TASDA"
        value="0"
      />
    </div>
  </q-page>
</template>
<script>
  import MatchScore from '../../statistics/match/MatchScore';
  import MatchStatus from '../../common/DataStatus';

  export default {
    name: 'Match',
    components: { MatchScore, MatchStatus},
  }
</script>
