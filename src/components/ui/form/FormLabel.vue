<template>
  <label class="label" :class="variant">
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    inline: Boolean,
  },
  computed: {
    variant() {
      return { label__inline: this.inline };
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  color: $gray-300;
  margin-bottom: 0.5rem;

  &__inline {
    display: inline-block;
    margin-right: 1rem;
  }
}
</style>
