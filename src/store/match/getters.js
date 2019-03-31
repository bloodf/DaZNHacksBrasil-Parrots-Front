export default {
  loading: (state) => state.loading,
  homeTeam: (state) => state.data.homeTeam,
  awayTeam: (state) => state.data.awayTeam,
  goals: (state) => ({
    home: state.data.homeTeam.goals,
    away: state.data.awayTeam.goals,
  }),
}
