import { AxiosDriver } from '../../boot/axios';
import MT from './types';

export async function getPlayerData({ commit }) {
  commit(MT.LOADING);
  try {
    const { data } = await AxiosDriver.get('events/getPlayerStats?player=johnf');
    commit(MT.SET_PLAYER_DATA, data);
  } catch (e) {
    console.error(e);
  } finally {
    commit(MT.LOADING);
  }
}

export async function getHeatMap({ commit }) {
  commit(MT.LOADING);
  try {
    const { data } = await AxiosDriver.get('heatmap?player=player1');
    commit(MT.SET_PLAYER_HEATMAP, data);
  } catch (e) {
    console.error(e);
  } finally {
    commit(MT.LOADING);
  }
}

export function addHeatMap({commit}, data){
  commit(MT.SET_PLAYER_HEATMAP, data);
}

export function addGoal({commit}, team){
  commit(MT.Goal);
}

export function addKeyPass({commit}, team){
  commit(MT.KeyPass);
}

export function addPass({commit}, team){
  commit(MT.Pass);
}

export function addIntercept({commit}, team){
  commit(MT.Intercept);
}

export function addAssist({commit}, team){
  commit(MT.Assist);
}

export function addDribble({commit}, team){
  commit(MT.Dribble);
}
