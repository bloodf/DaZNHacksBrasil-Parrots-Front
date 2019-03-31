import MT from './types';

export default {
  [MT.LOADING](state) {
    state.loading = !state.loading;
  },
  [MT.SET_PLAYER_DATA](state, payload) {
    state.data = payload;
  },
  [MT.SET_PLAYER_HEATMAP](state, payload) {
    state.heatMap = [...state.heatMap, ...payload.coords.map(c => ({ x: c.x, y: c.y, value: c.value }))];
  },
  [MT.Goal](state, payload) {
    state.data.goals += 1;
  },
  [MT.KeyPass](state, payload) {
    state.data.keyPasses += 1;
  },
  [MT.Pass](state, payload) {
    state.data.passes += 1;
  },
  [MT.Intercept](state, payload) {
    state.data.goalKicks += 1;
  },
  [MT.Assist](state, payload) {
    state.data.assists += 1;
  },
  [MT.Dribble](state, payload) {
    state.data.dribbles += 1;
  },
}
