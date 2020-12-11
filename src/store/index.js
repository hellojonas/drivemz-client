import { createStore } from 'vuex';
import examSession from './modules/examSession';
import questions from './modules/questions';

export default createStore({
  modules: {
    examSession,
    questions,
  },
  state() {
    return {};
  },
  mutations: {},
  actions: {},
});
