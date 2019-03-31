import MT from './types';
import { AxiosDriver } from '../../boot/axios';

export async function getMatch({ commit }) {
  commit(MT.LOADING);
  try {
    const { data } = await AxiosDriver.get('events/getMatchStats/?teamA=manchester&teamB=united');

    commit(MT.SET_MATCH_STATS, data);
  } catch (e) {

  } finally {
    commit(MT.LOADING);
  }

}
