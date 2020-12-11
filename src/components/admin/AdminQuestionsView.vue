<template>
  <div>
    <base-heading mb="lg">All questions</base-heading>

    <div class="questions">
      <ul class="questions__list">
        <question-item
          v-for="question in questions"
          :key="question._id"
          :id="question._id"
          :questionText="question.questionText"
        ></question-item>
      </ul>
    </div>

    <base-pagination
      :pages="pages"
      @next-page="gotoPage"
      @prev-page="gotoPage"
      @jump-to="gotoPage"
    ></base-pagination>
  </div>
</template>

<script>
import QuestionItem from './QuestionItem.vue';
import BasePagination from '../ui/BasePagination.vue';

export default {
  components: {
    QuestionItem,
    BasePagination,
  },
  data() {
    return {
      activePage: 1,
    };
  },
  computed: {
    questions() {
      return this.$store.getters['questions/questions'];
    },
    pages() {
      const pages = this.$store.getters['questions/pages'];
      return [...Array(pages).keys()].map((v) => v + 1);
    },
    baseUrl() {
      return 'http://localhost:3090/api/v1/questions';
    },
  },
  methods: {
    async fetchQuestion() {
      await this.$store.dispatch('questions/fetchQuestions');
    },
    gotoPage(page) {
      this.activePage = page;
    },
    async changePage() {
      await this.$store.dispatch('questions/changePage', { page: this.activePage, limit: 15 });
    },
  },
  watch: {
    activePage() {
      this.changePage();
    },
  },
  created() {
    this.fetchQuestion();
  },
};
</script>

<style lang="scss" scoped>
.questions {
  &__list {
    list-style: none;
  }
}
</style>
