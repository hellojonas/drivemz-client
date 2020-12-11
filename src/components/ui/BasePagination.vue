<template>
  <div class="pagination">
    <div class="pagination__pages">
      <span class="pagination__item pagination__item--prev" @click="previous">&lt;&lt;</span>
      <span
        class="pagination__item"
        :class="page === currentPage ? 'pagination__item--active' : ''"
        v-for="page in pages"
        :key="page"
        @click="jump(page)"
        >{{ page }}</span
      >
      <span class="pagination__item pagination__item--next" @click="next">&gt;&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pages: Array,
  },
  emits: ['next-page', 'prev-page', 'jump-to'],
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {},
  methods: {
    next() {
      if (this.currentPage === this.pages.length) {
        return;
      }
      this.currentPage += 1;
      this.$emit('next-page', this.currentPage);
    },
    previous() {
      if (this.currentPage === 1) {
        return;
      }
      this.currentPage -= 1;
      this.$emit('prev-page', this.currentPage);
    },
    jump(to) {
      if (to > this.pages.length || to < 0) {
        return;
      }
      this.currentPage = to;
      this.$emit('jump-to', to);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  &__pages {
    display: flex;
    justify-content: center;
  }

  &__item {
    display: inline-block;
    border: 1px solid $gray-700;
    height: 3rem;
    min-width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    padding: 0.4rem;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  &__item--active {
    border-color: $gray-300;
    font-weight: 700;
  }

  &__item--next,
  &__item--prev {
    border-color: transparent;
  }
}
</style>
