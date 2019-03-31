import MT from './types';
import { AxiosDriver } from '../../boot/axios';

export async function getMatch({ commit }) {
  commit(MT.LOADING);
  try {
    const { data } = await AxiosDriver.get('events/getMatchStats/?teamA=home&teamB=away');

    commit(MT.SET_MATCH_STATS, data);
  } catch (e) {

  } finally {
    commit(MT.LOADING);
  }

}

export function addGoal({ commit }, team) {
  commit(MT.Goal, team);
}

export function addFoul({ commit }, team) {
  commit(MT.Foul, team);
}

export function addKeyPass({ commit }, team) {
  commit(MT.KeyPass, team);
}

export function addPass({ commit }, team) {
  commit(MT.Pass, team);
}

export function addIntercept({ commit }, team) {
  commit(MT.Intercept, team);
}

export function addBallPossesion({ commit }, team) {
  commit(MT.BallPossesion, team);
}

export function addAssist({ commit }, team) {
  commit(MT.Assist, team);
}

export function addCornerKick({ commit }, team) {
  commit(MT.CornerKick, team);
}

export function addCrossAttack({ commit }, team) {
  commit(MT.CrossAttack, team);
}

export function addCounterAttack({ commit }, team) {
  commit(MT.CounterAttack, team);
}

export function addDribble({ commit }, team) {
  commit(MT.Dribble, team);
}
