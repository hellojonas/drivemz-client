<template>
  <div class="control" :class="mb">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    margin: {
      type: String,
      required: false,
    },
  },
  computed: {
    mb() {
      return {
        none: this.margin === 'none',
        'm-xs': this.margin === 'xs',
        'm-sm': this.margin === 'sm' || this.margin === undefined,
        'm-md': this.margin === 'md',
        'm-lg': this.margin === 'lg',
        'm-xl': this.margin === 'xl',
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.none {
  margin-bottom: 1rem;
}

.m-xs {
  margin-bottom: 1rem;
}

.m-sm {
  margin-bottom: 1.5rem;
}

.m-md {
  margin-bottom: 2rem;
}

.m-lg {
  margin-bottom: 2.5rem;
}

.m-xl {
  margin-bottom: 4rem;
}
</style>
