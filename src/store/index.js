import { createStore } from 'vuex';
import examSession from './modules/examSession';

export default createStore({
  modules: {
    examSession,
  },
  state() {
    return {};
  },
  mutations: {},
  actions: {},
});

// https://drivemz-d4033.firebaseio.com/ -- firebase endpoint
