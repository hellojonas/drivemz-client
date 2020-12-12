<template>
  <ul class="options">
    <li
      class="options__item"
      v-for="option in options"
      :key="option.id"
      @click="setSelected(option._id)"
      :class="selectedClass(option._id)"
    >
      {{ option.text }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    questionId: { type: String, required: true },
    options: { type: Array, required: true },
  },
  computed: {
    selectedOption() {
      // eslint-disable-next-line no-underscore-dangle
      return this.$store.getters['examSession/answers'][this.questionId];
    },
    selectedClass() {
      const { selectedOption } = this;
      return (id) => (selectedOption === id ? 'options__item--active' : '');
    },
  },
  methods: {
    setSelected(optionId) {
      this.$store.commit('examSession/addAnswer', { questionId: this.questionId, optionId });
    },
  },
};
</script>

<style lang="scss" scoped>
.options {
  list-style: none;
  padding: 0 1rem;

  &__item {
    cursor: pointer;
    width: 100%;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    background-color: $gray-700;
    border-radius: 4px;
    min-height: 5rem;
    box-shadow: $shadow-md;
    color: $gray-500;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  &__item--active {
    background-color: $gray-900;
  }
}
</style>
