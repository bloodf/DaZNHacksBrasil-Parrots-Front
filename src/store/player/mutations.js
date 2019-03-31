import MT from './types';

export default {
  [MT.LOADING](state) {
    state.loading = !state.loading;
  },
  [MT.SET_PLAYER_DATA](state, payload) {
    state.data = payload;
  },
  [MT.SET_PLAYER_HEATMAP](state, payload) {
    state.heatMap = payload.coords.map(c => ({ x: c.x, y: c.y, value: c.value }));
  },
  [MT.GoalAttempt](state, payload) {
    state.data[`${payload}Team`]
  },
  [MT.KeyPass](state, payload) {
    state.data[`${payload}Team`]
  },
  [MT.Pass](state, payload) {
    state.data[`${payload}Team`]
  },
  [MT.Intercept](state, payload) {
    state.data[`${payload}Team`]
  },
  [MT.Dribble](state, payload) {
    state.data[`${payload}Team`]
  },
}
