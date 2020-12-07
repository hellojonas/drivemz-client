export default {
  namespaced: true,
  state() {
    return {
      questions: [
        {
          id: '5f229414a203b4626d9065bb',
          text:
            'Nesta Situacão, se não for possível efectuar o cruzamento com segurança como deve proceder o condutor?',
          options: [
            {
              id: 'option-1',
              text: 'Reduzir a velocidade ou parar, de modo a dar a passagem ao outro veículo.',
            },
            {
              id: 'option-2',
              text: 'Utilizar os sinais sonoros para que o otro condutor pare.',
            },
            {
              id: 'option-3',
              text: 'Nada, porque eu tenho prioridade de passagem.',
            },
            {
              id: 'option-4',
              text: 'Acelerar para passar antes do veículo que circula em sentido contrário.',
            },
          ],
          image: 'generic.png',
          correctOption: 'option-1',
          category: 'LAWS',
        },
        {
          id: '5f229414a203b4626d9065bc',
          text: 'O que indica a marca rodoviária?',
          options: [
            {
              id: 'option-1',
              text: 'Aproximação de passagem de nível.',
            },
            {
              id: 'option-2',
              text: 'Faixa de sentido reversível.',
            },
            {
              id: 'option-3',
              text: 'Cédencia de prioridade.',
            },
          ],
          image: 'generic.png',
          correctOption: 'option-3',
          category: 'LAWS',
        },
        {
          id: '5f229414a203b4626d9065bd',
          text: 'Para combater a fadiga e o sono, o melhor remédio é:',
          options: [
            {
              id: 'option-1',
              text: 'Tomar um bebida com álcool.',
            },
            {
              id: 'option-2',
              text: 'Conduzir com o banco inclinado pra trás.',
            },
            {
              id: 'option-3',
              text: 'Fechar todas as janelas.',
            },
            {
              id: 'option-4',
              text: 'Parar de conduzir, descançar e, se necessário, dormir um pouco.',
            },
          ],
          image: 'generic.png',
          correctOption: 'option-4',
          category: 'LAWS',
        },
      ],
      answers: {},
    };
  },
  mutations: {
    addAnswer(state, payload) {
      state.answers[payload.questionId] = payload.optionId;
    },
    setQuestions(state, questions) {
      state.questions = questions;
    },
  },
  getters: {
    answers(state) {
      return state.answers;
    },
    ansLength(state) {
      return Object.keys(state.answers).length;
    },
    questions(state) {
      return state.questions;
    },
    questionById(state) {
      return (id) => state.questions.find((question) => question.id === id);
    },
  },
  actions: {
    addAnswer(context, payload) {
      context.commit('addAnswer', payload);
    },
    loadExam() {
      /* Get an array of 25 questions from DB */
      /* pupulate questions */
    },
  },
};
