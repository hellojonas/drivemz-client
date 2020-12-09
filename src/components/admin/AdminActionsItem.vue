<template>
  <li class="actions-item"><slot></slot></li>
</template>

<script>
export default {
};
</script>


<style lang="scss" scoped>
.actions-item {
  padding: 1rem 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: $gray-700;
  }
}
</style>
