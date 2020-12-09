<template>
  <li class="option" :class="activeClass" @click="optionClicked">
    {{ text }}
  </li>
</template>

<script>
export default {
  emits: ['activated'],
  props: {
    text: String,
    value: String,
    active: Boolean,
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    activeClass() {
      return { 'option--active': this.active };
    },
  },
  methods: {
    optionClicked() {
      this.$emit('activated', this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.option {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: $gray-700;
  border: 2px solid transparent;
  border-radius: 3px;
  color: $gray-500;
  font-size: 1.2rem;
  cursor: pointer;
  margin-bottom: 1rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    background-color: $gray-900;
  }

  &--active {
    background-color: $gray-900;
    border-color: $gray-700;
  }
}
</style>
