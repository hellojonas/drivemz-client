<template>
  <h1 v-if="level === 1" class="heading heading--primary" :class="margin"><slot></slot></h1>
  <h1 v-else-if="level === 2" class="heading heading--secondary" :class="margin"><slot></slot></h1>
  <h1 v-else-if="level === 3" class="heading heading--tertiary" :class="margin"><slot></slot></h1>
  <h1 v-else-if="level === 4" class="heading heading--quaternary" :class="margin"><slot></slot></h1>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 2,
      validator: (val) => val < 5 && val > 0,
    },
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
.heading {
  font-weight: 700;
  color: $gray-200;

  &--primary {
    font-size: 1.8rem;
  }
  &--secondary {
    font-size: 1.6rem;
  }
  &--tertiary {
    font-size: 1.4rem;
  }
  &--quaternary {
    font-size: 1.2rem;
  }
}

.mb-none {
  margin-bottom: 0;
}
.mb-xs {
  margin-bottom: .5rem;
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
