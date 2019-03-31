<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    beforeMount() {
      this.sockets.subscribe('event', (data) => {
        if (data.type === 'GOAL_ATTEMPT') {
          this.addGoalAttempt(data.team);
        }
        if (data.type === 'GOAL') {
          this.addGoal(data.team)
        }
        if (data.type === 'FOUL') {
          this.addFoul(data.team);
        }
        if (data.type === 'KEY_PASS') {
          this.addKeyPass(data.team);
        }
        if (data.type === 'PASS') {
          this.addPass(data.team);
        }
        if (data.type === 'INTERCEPT') {
          this.addIntercept(data.team);
        }
        if (data.type === 'BALL_POSSESSION') {
          this.addBallPossesion(data.team);
        }
        if (data.type === 'ASSIST') {
          this.addAssist(data.team);
        }
        if (data.type === 'CORNER_KICK') {
          this.addCornerKick(data.team);
        }
        if (data.type === 'CROSS_ATTACK') {
          this.addCrossAttack(data.team);
        }
        if (data.type === 'COUNTER_ATTACK') {
          this.addCounterAttack(data.team);
        }
        if (data.type === 'DRIBBLE') {
          this.addDribble(data.team);
        }


      });
    },
    methods: {
      addGoalAttempt(team) {

      },
      addGoal(team) {

      },
      addFoul(team) {

      },
      addKeyPass(team) {

      },
      addPass(team) {

      },
      addIntercept(team) {

      },
      addBallPossesion(team) {

      },
      addAssist(team) {

      },
      addCornerKick(team) {

      },
      addCrossAttack(team) {

      },
      addCounterAttack(team) {

      },
      addDribble(team) {

      },
    },
  };
</script>

<style>
</style>
