<template>
  <li class="question">
    <div class="question__content">
      <div class="question__img-box">
        <img src="@/assets/img/question-2.jpg" class="question__img" />
      </div>
      <div class="question__text">
        <base-paragraph mb="none">{{ questionText }}</base-paragraph>
      </div>
    </div>
    <div class="question__actions">
      <base-button @click.stop="deleteQuestion">Delete</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    questionText: String,
    id: String,
  },
  data() {
    return {};
  },
  computed: {
    captionMoreLess() {
      return this.showMore ? 'More' : 'Less';
    },
  },
  methods: {
    deleteQuestion() {},
  },
};
</script>

<style lang="scss" scoped>
.question {
  background-color: $gray-700;
  border-radius: 4px;
  overflow: hidden;
  padding: 1.5rem 2rem;
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;

  &__content {
    margin-bottom: 2rem;

    @include media('sm') {
      display: flex;
    }
  }

  &__text {
    margin-bottom: 2rem;
    text-align: center;
    @include media('sm') {
      text-align: left;
      flex: 1;
      order: -1;
      margin-right: 2rem;
    }
  }

  &__img-box {
    margin-bottom: 2rem;
    @include media('sm') {
      flex: 0 0 10rem;
    }
  }

  &__img {
    display: block;
    border-radius: 3px;
    height: 7rem;
    width: 6rem;
    margin: 0 auto;

    @include media('sm') {
      width: 100%;
      height: 12rem;
    }
  }

  &__actions {
    text-align: center;
  }

  @include media('sm') {
    padding: 2rem;
  }
}
</style>
