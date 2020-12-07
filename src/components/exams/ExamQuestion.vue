<template>
  <div class="question">
    <header class="question__header">
      <div class="question__text">
        {{ text }}
      </div>
      <div class="question__img-box">
        <div v-if="previewImage" class="overlay" @click="hidePreview"></div>
        <img
          src="@/assets/img/question-1.jpg"
          class="question__img"
          :class="preview"
          alt="imagem da questao"
          @click="togglePreview"
        />
      </div>
    </header>
    <section class="question__options">
      <exam-question-options :options="options"></exam-question-options>
    </section>
  </div>
</template>

<script>
import ExamQuestionOptions from './ExamQuestionOptions.vue';

export default {
  props: {
    id: { type: String, required: true },
    text: { type: String, required: true },
    options: { type: Array, required: true },
  },
  components: {
    ExamQuestionOptions,
  },
  data() {
    return {
      previewImage: false,
      selectedOption: null,
    };
  },
  computed: {
    preview() {
      return {
        'question__img--preview': this.previewImage,
      };
    },
    selected() {
      return {
        'question__options-item--selected': null,
      };
    },
  },
  methods: {
    hidePreview() {
      this.previewImage = false;
    },
    togglePreview() {
      this.previewImage = !this.previewImage;
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9920;
}

.question {
  &__stats {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    color: $gray-500;
    background: linear-gradient(10deg, $gray-800, $gray-900);
    padding: 0.5rem 1rem;
  }

  &__header {
    border-radius: 0 0 4px 4px;
    overflow: hidden;
    box-shadow: $shadow-md;
    margin-bottom: 3rem;
  }

  &__header {
    display: flex;
    background-color: $gray-700;
    background: linear-gradient(to bottom right, $gray-800, $gray-900);
    padding: 1rem 1.5rem;
    margin-bottom: 3rem;
  }

  &__text {
    flex: 1;
    font-weight: 600;
    line-height: 1.6;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }

  &__img-box {
    flex: 0 0 30%;
    height: 11rem;
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &__img--preview {
    @include pos-center;
    width: 32rem;
    height: 24rem;
    z-index: 9930;
  }
}
</style>
