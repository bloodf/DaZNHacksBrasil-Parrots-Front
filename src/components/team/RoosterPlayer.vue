<template>
  <p class="player row">
    <span class="col-7 ellipsis"
          :class="rightAlign ? 'order-last text-right' : ''"
    >
      <span class="number"><strong>{{number}}</strong></span>
      <span>{{name}}</span>
    </span>

    <span
      class="col-5 status"
      :class="rightAlign ? 'order-first text-left' : 'text-right'"
    >
      <span>
        <span v-if="goals > 1" class="q-mr-sm">{{goals}}</span>
        <q-icon
          name="fas fa-futbol" />
      </span>
      <span v-if="cardFault">
        <q-icon
          name="fas fa-square"
          :color="cardFault > 2 ? 'red' : 'yellow'"
        />
      </span>
      <span v-if="substitute">
        <q-icon
          v-if="substitute === 'in'"
          name="fas fa-caret-up"
          color="green"
        />
        <q-icon
          v-if="substitute === 'out'"
          name="fas fa-caret-down"
          color="red"
        />
      </span>
      <span v-if="lasEventMinute" class="lasEventMinute"><strong>{{lasEventMinute}}'</strong></span>
    </span>
  </p>
</template>
<script>
  export default {
    name: 'RoosterPlayer',
    props: {
      number: {
        type: [Number, String],
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      cardFault: {
        type: Number,
        required: false,
        default: 0,
      },
      goals: {
        type: Number,
        required: false,
        default: 0,
      },
      lasEventMinute: {
        type: Number,
        required: false,
        default: 0,
      },
      substitute: {
        type: String,
        required: false,
        default: '',
      },
      rightAlign: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
  }
</script>
<style scoped>
  .player {
    padding: 0 10px calc(0.8rem - 1px) 10px;
    display: flex;
    width: 100%;
    border-bottom: 1px solid #333C41;
    margin-bottom: 0px;
  }

  .player:last-child {
    border: 0;
  }

  .player * {
    font-size: 1rem;
    flex-direction: column;
    line-height: 1.6rem;
  }

  .player .number, .player .lasEventMinute {
    margin-right: 6px;
    font-weight: bolder;
    font-size: 1.2rem;
  }

  .player .lasEventMinute {
    justify-self: flex-end;
    margin-left: 4px;
  }

  .status > span {
    margin-left: 4px;
  }
</style>
