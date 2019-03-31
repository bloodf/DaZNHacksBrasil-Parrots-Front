export function homeGoals(state){
  return state.data.roosterHome.players.reduce((acc, curr) => acc + curr.goals, 0);
}

export function awayGoals(state){
  return state.data.roosterAway.players.reduce((acc, curr) => acc + curr.goals, 0);
}

export function homeTeam(state){
  return state.data.roosterHome.players.filter((r, index) => index <= 10);
}
export function awayTeam(state){
  return state.data.roosterAway.players.filter((r, index) => index <= 10);
}

export function homeManager(state){
  return state.data.roosterHome.manager;
}
export function awayManager(state){
  return state.data.roosterAway.manager;
}
export function homeSubstitutesTeam(state){
  return state.data.roosterHome.players.filter((r, index) => index > 10);
}

export function awaySubstitutesTeam(state){
  return state.data.roosterAway.players.filter((r, index) => index > 10);
}
