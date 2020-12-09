<template>
  <li class="dropdown-item" @click.stop="setSelectedItem">
    {{ text }}
  </li>
</template>

<script>
export default {
  props: {
    value: String,
    text: String,
  },
  inject: ['itemSelected'],
  methods: {
    setSelectedItem() {
      this.itemSelected({
        text: this.text,
        value: this.value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-item {
  padding: 1rem 1.5rem;
  width: 100%;

  &:hover {
    background-color: $gray-700;
    color: $gray-400;
  }
}
</style>
