<template>
  <ul class="selector">
    <option-selector-item
      v-for="option in $_options"
      :key="option.text"
      :text="option.text"
      :value="option.value"
      :active="option.active"
      @activated="setActive"
    >
    </option-selector-item>
  </ul>
</template>

<script>
import OptionSelectorItem from './OptionSelectorItem.vue';

export default {
  components: {
    OptionSelectorItem,
  },
  props: {
    options: Array,
    modelValue: String,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      $_options: this.options,
    };
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    setActive(value) {
      const idxNew = this.$_options.findIndex((opt) => opt.value === value);
      const idxOld = this.$_options.findIndex((opt) => opt.active);

      if (idxNew < 0) return;
      if (idxOld !== -1) this.$_options[idxOld].active = false;

      this.$_options[idxNew].active = !this.$_options[idxNew].active;
      this.value = value;
    },
    initOptions() {
      this.$_options = this.options.map((option) => ({ ...option, active: false }));
    },
  },
  watch: {
    options() {
      this.initOptions();
    },
  },
  mounted() {
    this.initOptions();
    this.setActive(this.modelValue);
  },
};
</script>

<style lang="scss" scoped>
.selector {
  // display: inline-block;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
</style>
