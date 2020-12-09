<template>
  <!-- <label class="label">
    <slot>{{ placeholder }}</slot>
  </label> -->
  <textarea
    class="text-area"
    cols="30"
    rows="3"
    :placeholder="placeholder"
    v-model="value"
  ></textarea>
</template>

<script>
export default {
  props: {
    placeholder: String,
    label: String,
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
.label {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(4rem);
}

.text-area {
  width: 100%;
  height: 8rem;
  background-color: $gray-700;
  border: none;
  border-radius: 2px;
  padding: 1rem 1.5rem;
  font: inherit;
  color: $gray-500;

  &:focus {
    outline: none;
    background-color: $gray-900;
  }
}

// .text-area:placeholder-shown ~ .label {
//   opacity: 1;
//   transform: translateY(0);
// }
</style>
