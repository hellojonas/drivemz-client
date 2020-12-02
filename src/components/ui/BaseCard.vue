<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  min-height: 8rem;
  box-shadow: $shadow-md;
  max-width: 36rem;
  width: 100%;
  margin: 0 auto;
  background-color: $gray-700;
  padding: 1.4rem 1.6rem;
  border-radius: 4px;
}
</style>
