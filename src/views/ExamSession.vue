<template>
  <div class="exam">
    <header class="exam__header">
      <div class="exam__stats">
        <div class="exam__timer">59:45</div>
        <div class="exam__page">{{ page + 1 }} / 25</div>
      </div>
    </header>
    <ul class="exam__question-box" :spaceBetween="80">
      <exam-question
        class="exam__question"
        :id="questions[page]._id"
        :text="questions[page].text"
        :options="questions[page].options"
      ></exam-question>
    </ul>
    <section class="exam__controls">
      <base-button @click="prevQuestion">&lt;&lt;</base-button>
      <base-button @click="nextQuestion">&gt;&gt;</base-button>
    </section>
  </div>
</template>

<script>
import ExamQuestion from '@/components/exams/ExamQuestion.vue';

export default {
  components: {
    ExamQuestion,
  },
  data() {
    return {
      page: 0,
    };
  },
  computed: {
    questions() {
      return this.$store.getters['examSession/questions'];
    },
    questionById() {
      return this.$store.getters['examSession/questionById'];
    },
  },
  methods: {
    nextQuestion() {
      if (this.page >= 2) {
        return;
      }
      this.page += 1;
    },
    prevQuestion() {
      if (this.page < 1) {
        return;
      }
      this.page -= 1;
    },
  },
  created() {
    /* Load Exam question */
    /* Then start exam Tmer */
  },
};
</script>

<style lang="scss" scoped>
.exam {
  margin-top: 4rem;
  padding: 1rem;

  &__stats {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    color: $gray-500;
    background: linear-gradient(10deg, $gray-800, $gray-900);
    padding: 0.5rem 1rem;
  }

  &__header {
    border-radius: 4px 4px 0 0;
    overflow: hidden;
  }

  &__question-box {
    list-style: none;
    position: relative;
    overflow: hidden;
    margin-bottom: 2rem;
  }

  &__controls {
    display: flex;
    justify-content: space-around;
  }
}
</style>
