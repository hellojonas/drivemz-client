<template>
  <p class="error" :class="[marginBottom, marginTop]"><slot></slot></p>
</template>

<script>
export default {
  props: {
    mb: String,
    mt: String,
  },
  computed: {
    marginTop() {
      return {
        'mt-none': this.mt === 'none',
        'mt-xs': this.mt === 'xs',
        'mt-sm': this.mt === 'sm' || this.mt === undefined,
        'mt-md': this.mt === 'md',
        'mt-lg': this.mt === 'lg',
        'mt-xl': this.mt === 'xl',
      };
    },
    marginBottom() {
      return {
        'mb-none': this.mb === 'none',
        'mb-xs': this.mb === 'xs',
        'mb-sm': this.mb === 'sm' || this.mb === undefined,
        'mb-md': this.mb === 'md',
        'mb-lg': this.mb === 'lg',
        'mb-xl': this.mb === 'xl',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  margin-top: 0.5rem;
  font-style: italic;
  font-weight: 300;
  color: $accent-color-2;
}

.mt-none {
  margin-top: 0;
}

.mt-xs {
  margin-top: .5rem;
}

.mt-sm {
  margin-top: 1rem;
}

.mt-md {
  margin-top: 2rem;
}

.mt-lg {
  margin-top: 2.5rem;
}

.mt-xl {
  margin-top: 4rem;
}

.mb-none {
  margin-bottom: 0;
}

.mb-xs {
  margin-bottom: 1rem;
}

.mb-sm {
  margin-bottom: 1.5rem;
}

.mb-md {
  margin-bottom: 2rem;
}

.mb-lg {
  margin-bottom: 2.5rem;
}

.mb-xl {
  margin-bottom: 4rem;
}
</style>
