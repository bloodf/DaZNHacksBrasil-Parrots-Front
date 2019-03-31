import MT from './types';

export default {
  [MT.LOADING](state) {
    state.loading = !state.loading;
  },
  [MT.SET_MATCH_STATS](state, payload) {
    state.data.homeTeam = payload.teamA;
    state.data.awayTeam = payload.teamB;
  },
}
