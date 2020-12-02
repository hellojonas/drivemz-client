<template>
  <button class="button" :class="[roundedClass, typeClass]">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
    rounded: Boolean,
    type: {
      type: String,
      default: 'primary',
      validator: (val) => ['primary', 'secondary', 'tertiary'].includes(val),
    },
  },
  computed: {
    roundedClass() {
      return {
        'button--rounded': this.rounded,
      };
    },
    typeClass() {
      return {
        'button--primary': this.type === 'primary',
        'button--secondary': this.type === 'secondary',
        'button--tertiary': this.type === 'tertiary',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 3px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.8px;

  &--primary {
    background-color: $accent-color;
    color: $gray-100;
  }

  &--secondary {
    background-color: $gray-100;
    color: $accent-color;
  }

  &--tertiary {
    background-color: transparent;
    color: $gray-100;
    border: 2px solid $gray-100;
  }

  &--rounded {
    border-radius: 100px;
  }
}
</style>
