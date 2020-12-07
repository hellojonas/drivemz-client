<template>
  <div class="exam">
    <header class="exam__header">
      <div class="exam__stats">
        <div class="exam__timer">59:45</div>
        <div class="exam__page">{{ page }} / 25</div>
      </div>
    </header>
    <swiper class="exam__question-box" :spaceBetween="80">
      <swiper-slide
        v-for="question in questions"
        :key="question.id"
        @slideNextTransitionEnd="incrementPage"
        @slidePrevTransitionEnd="decrementPage"
      >
        <exam-question
          class="exam__question"
          :id="question.id"
          :text="question.text"
          :options="question.options"
        ></exam-question>
      </swiper-slide>
    </swiper>
    <!-- <section class="exam__controls">
      controls
    </section> -->
  </div>
</template>

<script>
import ExamQuestion from '@/components/exams/ExamQuestion.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/components/pagination/pagination.scss';

export default {
  components: {
    ExamQuestion,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    questions() {
      return this.$store.getters['examSession/questions'];
    },
  },
  methods: {
    incrementPage() {
      this.page += 1;
    },
    decrementPage() {
      this.page -= 1;
    },
  },
  beforeMount() {
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
}
</style>
