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
