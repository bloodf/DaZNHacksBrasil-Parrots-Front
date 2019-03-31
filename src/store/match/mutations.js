import MT from './types';

export default {
  [MT.LOADING](state) {
    state.loading = !state.loading;
  },
  [MT.SET_MATCH_STATS](state, payload) {
    state.data.homeTeam = payload.teamA;
    state.data.awayTeam = payload.teamB;
  },
  [MT.Goal](state, payload) {
    state.data[`${payload}Team`].goals += 1;
  },
  [MT.Foul](state, payload) {
    state.data[`${payload}Team`].fouls += 1;
  },
  [MT.BallPossesion](state, payload) {
    state.data[`${payload}Team`].ballPossession += 1;
  },
  [MT.CornerKick](state, payload) {
    state.data[`${payload}Team`].cornerKicks += 1;
  },
  [MT.CrossAttack](state, payload) {
    state.data[`${payload}Team`].crossAttack += 1;
  },
  [MT.CounterAttack](state, payload) {
    state.data[`${payload}Team`].counterAttack += 1;
  },
}
