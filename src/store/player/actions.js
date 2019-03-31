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

export function Goal({commit}, team){
  commit(MT.Goal);
}

export function Foul({commit}, team){
  commit(MT.Foul);
}

export function KeyPass({commit}, team){
  commit(MT.KeyPass);
}

export function Pass({commit}, team){
  commit(MT.Pass);
}

export function Intercept({commit}, team){
  commit(MT.Intercept);
}

export function BallPossesion({commit}, team){
  commit(MT.BallPossesion);
}

export function Assist({commit}, team){
  commit(MT.Assist);
}
export function CornerKick({commit}, team){
  commit(MT.CornerKick);
}
export function CrossAttack({commit}, team){
  commit(MT.CrossAttack);
}
export function CounterAttack({commit}, team){
  commit(MT.CounterAttack);
}
export function Dribble({commit}, team){
  commit(MT.Dribble);
}
