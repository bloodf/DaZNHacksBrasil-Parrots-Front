<template>
  <div>
    <div class="row">
      <div class="col q-pa-md">
        <q-select
          square
          filled
          v-model="model"
          :options="options"
          label="Player"
          class="bg-white"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-4 q-pa-md">
        <q-img
          spinner-color="ascent"
          src="https://www.dreamteamfc.com/c/wp-content/uploads/sites/4/2018/07/NINTCHDBPICT0003996131632.jpg?strip=all&w=960&quality=100"
          :ratio="9/16"
          style="height: 200px;"
        />
      </div>
      <div class="col-8 q-pa-md">
        <div class="row">
          <div class="col-12">
            <h4 class="header-font no-margin">KUN AGÜERO</h4>
          </div>
          <div class="col-12">
            <div class="row player-info">
              <div class="col-6">
                <div class="row">
                  <div class="col-12">
                    <p class="header-font">Place of Birth</p>
                    <p>Buenos Aires, Argentina</p>
                  </div>
                  <div class="col-12">
                    <p class="header-font">Nationality</p>
                    <p>Argentina</p>
                    <p>Spain</p>
                  </div>
                  <div class="col-12">
                    <p class="header-font">Position</p>
                    <p>Centre Forward</p>
                    <p>Offensive Midfielder</p>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-12">
                    <p class="header-font">Height</p>
                    <p>172 cm</p>
                  </div>
                  <div class="col-12">
                    <p class="header-font">Weight</p>
                    <p>74 Kg</p>
                  </div>
                  <div class="col-12">
                    <p class="header-font">Foot</p>
                    <p>Booth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <data-status
        title="Goals"
        :value="playerData.goals"
      />
      <data-status
        title="Goals Attempts"
        :value="playerData.goalKicks"
      />
      <data-status
        title="Passes"
        :value="playerData.dribbles"
      />
      <data-status
        title="Key Passes"
        :value="playerData.keyPasses"
      />
      <data-status
        title="Assists"
        :value="playerData.assists"
      />
      <data-status
        title="Dribbles"
        :value="playerData.dribbles"
      />
    </div>
    <div class="row justify-center">
      <div class="col-6 q-pa-xl">
        <field-heat-map />
      </div>
    </div>
  </div>
</template>
<script>
  import DataStatus from '../common/DataStatus';
  import FieldHeatMap from '../heatmap/Field';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Player',
    components: { FieldHeatMap, DataStatus },
    data: () => ({
      model: null,
      options: [
        'Alan Smith', 'Gary Neville', 'Paul Scholes', 'Steve Coppell', 'Wayne Rooney',
      ],
    }),
    async beforeMount() {
      await this.getPlayerData();
      await this.getHeatMap();
      this.sockets.subscribe('event', (data) => {
        if (data.type === 'GOAL') {
          this.addGoal(data.team)
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
        if (data.type === 'ASSIST') {
          this.addAssist(data.team);
        }
        if (data.type === 'DRIBBLE') {
          this.addDribble(data.team);
        }
      });

    },
    computed: {
      ...mapGetters('Player', [
        'playerData',
      ]),
    },
    methods: {
      ...mapActions('Player', [
        'getPlayerData',
        'getHeatMap',
        'addGoal',
        'addKeyPass',
        'addPass',
        'addIntercept',
        'addAssist',
        'addDribble',
      ]),
    },
  }
</script>
<style scoped>
  .player-info p {
    margin-bottom: 0;
  }
</style>
