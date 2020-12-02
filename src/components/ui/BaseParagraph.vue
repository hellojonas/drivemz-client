<template>
  <p class="paragraph" :class="margin"><slot></slot></p>
</template>

<script>
export default {
  props: {
    mb: {
      type: String,
      default: 'sm',
      validator: (val) => ['none', 'xs', 'sm', 'md', 'lg', 'xl'].includes(val),
    },
  },
  computed: {
    margin() {
      return {
        'mb-none': this.mb === 'none',
        'mb-xs': this.mb === 'xs',
        'mb-sm': this.mb === 'sm',
        'mb-md': this.mb === 'md',
        'mb-lg': this.mb === 'lg',
        'mb-xl': this.mb === 'xl',
      };
    },
  },
};
</script>

<style lang="scss" scoped>

.paragraph {
  line-height: 1.7;
}

.mb-none {
  margin-bottom: 0;
}
.mb-xs {
  margin-bottom: 0.5rem;
}
.mb-sm {
  margin-bottom: 1rem;
}
.mb-md {
  margin-bottom: 2rem;
}
.mb-lg {
  margin-bottom: 4rem;
}
.mb-xl {
  margin-bottom: 6rem;
}
</style>
