import axios from 'axios';
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io'

export const AxiosDriver = axios.create({
  baseURL: 'https://warm-woodland-81988.herokuapp.com',
  timeout: 60000,
});

export default async ({ store, Vue }) => {
  Vue.prototype.$axios = AxiosDriver;
  Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('https://warm-woodland-81988.herokuapp.com'),
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    },
  }))
};
