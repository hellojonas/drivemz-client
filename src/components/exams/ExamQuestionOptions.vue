<template>
  <ul class="options">
    <li
      class="options__item"
      v-for="option in options"
      :key="option.id"
      @click="setSelected($event, option.id)"
      :class="[selectedClass(option.id)]"
    >
      {{ option.text }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    options: { type: Array, required: true },
  },
  data() {
    return {
      selectedOption: '',
    };
  },
  computed: {
    selectedClass() {
      return (id) => (this.selectedOption === id ? 'options__item--active' : '');
    },
  },
  methods: {
    setSelected(event, id) {
      this.selectedOption = id;

      this.options.forEach((option) => {
        if (id === option.id) {
          event.target.classList.add('options__item--active');
          return;
        }
        event.target.classList.remove('options__item--active');
      });
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
