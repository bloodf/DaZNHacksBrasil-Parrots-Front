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
            <h4 class="header-font no-margin">Player Name</h4>
          </div>
          <div class="col-12">
            <div class="row player-info">
              <div class="col-6">
                <div class="row">
                  <div class="col-12">
                    <p class="header-font">Place of Birth</p>
                    <p>City</p>
                  </div>
                  <div class="col-12">
                    <p class="header-font">Nationality</p>
                    <p>City</p>
                  </div>
                  <div class="col-12">
                    <p class="header-font">Position</p>
                    <p>City</p>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-12">
                    <p class="header-font">Height</p>
                    <p>City</p>
                  </div>
                  <div class="col-12">
                    <p class="header-font">Weight</p>
                    <p>City</p>
                  </div>
                  <div class="col-12">
                    <p class="header-font">Foot</p>
                    <p>City</p>
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
        value="0"
      />
      <data-status
        title="Goals Attempts"
        value="0"
      />
      <data-status
        title="Passes"
        value="0"
      />
      <data-status
        title="Key Passes"
        value="0"
      />
      <data-status
        title="Assists"
        value="0"
      />
      <data-status
        title="Dribbles"
        value="0"
      />
    </div>
    <div class="row justify-center">
      <div class="col-8 q-pa-xl">
        <field-heat-map />
      </div>
    </div>
  </div>
</template>
<script>
  import DataStatus from '../common/DataStatus';
  import FieldHeatMap from '../heatmap/Field';

  export default {
    name: 'Player',
    components: { FieldHeatMap, DataStatus },
    data: () => ({
      model: null,
      options: [
        'Alan Smith', 'Gary Neville', 'Paul Scholes', 'Steve Coppell', 'Wayne Rooney',
      ],
    }),
  }
</script>
<style scoped>
  .player-info p {
    margin-bottom: 0;
  }
</style>
