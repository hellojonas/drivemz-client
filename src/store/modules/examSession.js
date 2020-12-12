export default {
  namespaced: true,
  state() {
    return {
      questions: [
        {
          _id: '5f229414a203b4626d9065bb',
          text:
            'Nesta Situacão, se não for possível efectuar o cruzamento com segurança como deve proceder o condutor?',
          options: [
            {
              _id: 'option-1',
              text: 'Reduzir a velocidade ou parar, de modo a dar a passagem ao outro veículo.',
            },
            {
              _id: 'option-2',
              text: 'Utilizar os sinais sonoros para que o otro condutor pare.',
            },
            {
              _id: 'option-3',
              text: 'Nada, porque eu tenho prioridade de passagem.',
            },
            {
              _id: 'option-4',
              text: 'Acelerar para passar antes do veículo que circula em sentido contrário.',
            },
          ],
          image: 'generic.png',
          correctOption: 'option-1',
          category: 'LAWS',
        },
        {
          _id: '5f229414a203b4626d9065bc',
          text: 'O que indica a marca rodoviária?',
          options: [
            {
              _id: 'option-1',
              text: 'Aproximação de passagem de nível.',
            },
            {
              _id: 'option-2',
              text: 'Faixa de sentido reversível.',
            },
            {
              _id: 'option-3',
              text: 'Cédencia de prioridade.',
            },
          ],
          image: 'generic.png',
          correctOption: 'option-3',
          category: 'LAWS',
        },
        {
          _id: '5f229414a203b4626d9065bd',
          text: 'Para combater a fadiga e o sono, o melhor remédio é:',
          options: [
            {
              _id: 'option-1',
              text: 'Tomar um bebida com álcool.',
            },
            {
              _id: 'option-2',
              text: 'Conduzir com o banco inclinado pra trás.',
            },
            {
              _id: 'option-3',
              text: 'Fechar todas as janelas.',
            },
            {
              _id: 'option-4',
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
      const { questionId } = payload;
      const { optionId } = payload;
      state.answers[questionId] = optionId;
    },
    setQuestions(state, questions) {
      state.questions = questions;
    },
  },
  getters: {
    questions(state) {
      return state.questions;
    },
    questionById(state) {
      // eslint-disable-next-line no-underscore-dangle
      return (id) => state.questions.find((question) => question._id === id);
    },
    answers(state) {
      return state.answers;
    },
  },
  actions: {
    addAnswer(context, payload) {
      context.commit('addAnswer', payload);
    },
    initExam() {
      /* Populate question array with 25 random qustions */
    },
  },
};
