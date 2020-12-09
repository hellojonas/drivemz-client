<template>
  <!-- <label class="label"></label> -->
  <input class="text-input" type="text" :placeholder="placeholder" v-model="value" />
</template>

<script>
export default {
  props: {
    // label: String,
    placeholder: String,
    modelValue: String,
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit('update:modelValue', val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.text-input {
  display: block;
  width: 100%;
  background-color: $gray-700;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 2px;
  padding: 1rem 1.5rem;
  font: inherit;
  color: inherit;

  &:focus {
    outline: none;
    background-color: $gray-900;
  }

  &:invalid,
  &:-moz-ui-invalid {
    border-bottom-color: $accent-color;
    outline: none;
  }
}
</style>
