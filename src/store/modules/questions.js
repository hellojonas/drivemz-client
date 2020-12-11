import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      total: 0,
      page: 1,
      limit: 15,
      questions: [],
    };
  },
  mutations: {
    setQuestions(state, questions) {
      state.questions = questions;
    },
    addQuestion(state, question) {
      state.question.push(question);
    },
    setTotal(state, val) {
      state.total = val;
    },
    setPage(state, val) {
      state.page = val;
    },
    setLimit(state, val) {
      state.limit = val;
    },
  },
  getters: {
    questions(state) {
      return state.questions;
    },
    questionById(state) {
      return (id) => state.questions.find((question) => question.id === id);
    },
    pages(state) {
      return Math.ceil(state.total / state.limit);
    },
    page(state) {
      return state.page;
    },
    limit(state) {
      return state.limit;
    },
  },
  actions: {
    async fetchQuestions(context) {
      const { page } = context.getters;
      const { limit } = context.getters;
      const questions = await axios.get(
        `http://localhost:3090/api/v1/questions?page=${page}&limit=${limit}`,
      );

      context.commit('setQuestions', questions.data.questions);
      context.commit('setTotal', questions.data.total);
    },
    async changePage(context, payload) {
      const { page } = payload;
      const { limit } = payload;
      context.commit('setPage', page);
      context.commit('setLimit', limit || 15);
      await context.dispatch('fetchQuestions');
    },
  },
};
