<template>
  <div class="dropdown" @click="toggleDropdown">
    <div class="dropdown__label-box">
      <div class="dropdown__label">
        {{ label }}
      </div>
      <svg class="dropdown__icon" :class="rotate">
        <use
          href="@/assets/icons/stripe.svg#icon-keyboard_arrow_down"
        ></use>
      </svg>
    </div>
    <ul class="dropdown__list" v-if="dropdownIsVisible">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      label: 'Select',
      dropdownIsVisible: false,
    };
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit('update:modelValue', val);
      },
    },
    rotate() {
      return { 'dropdown__icon--rotate': this.dropdownIsVisible };
    },
  },
  methods: {
    itemSelected(item) {
      this.value = item.value;
      this.label = item.text;
      this.toggleDropdown();
    },
    toggleDropdown() {
      this.dropdownIsVisible = !this.dropdownIsVisible;
    },
  },
  provide() {
    return {
      itemSelected: this.itemSelected,
    };
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  display: inline-block;
  width: 20rem;
  border-radius: 2px;
  background-color: $gray-700;
  position: relative;
  cursor: pointer;
  padding: 0.8rem 1.5rem;

  &__label-box {
    @include flex-align;
    justify-content: space-between;
  }

  &__label {
    color: $gray-500;
  }

  &__icon {
    width: 2.4rem;
    height: 2.4rem;
    color: $gray-500;
    fill: currentColor;
  }

  &__icon--rotate {
    transform: rotate(-180deg);
  }

  &__list {
    list-style: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: $gray-600;
    color: $gray-900;
    min-width: 110%;
    box-shadow: $shadow-lg;
    z-index: 1;
  }
}
</style>
