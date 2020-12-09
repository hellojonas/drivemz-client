<template>
  <section class="manage">
    <nav class="actions">
      <ul class="actions__options">
        <li class="actions__item" @click="setTab('admin-questions-view')">View all</li>
        <li class="actions__item" @click="setTab('admin-questions-create')">Create</li>
      </ul>
    </nav>
    <section class="actions-content">
      <component :is="activeTab"></component>
    </section>
  </section>
</template>

<script>
import AdminQuestionsCreate from '@/components/admin/AdminQuestionsCreate.vue';
import AdminQuestionsView from '@/components/admin/AdminQuestionsView.vue';

export default {
  components: {
    AdminQuestionsCreate,
    AdminQuestionsView,
  },
  data() {
    return {
      activeTab: 'admin-questions-view',
    };
  },
  methods: {
    setTab(tab) {
      this.activeTab = tab;
    },
  },
  provide() {
    return {
      switchToTab: this.setTab,
    };
  },
};
</script>

<style lang="scss" scoped>
.actions {
  margin-bottom: 2rem;
  background-color: $gray-900;
  $color: $gray-200;
  border-radius: 0 0 4px 4px;
  box-shadow: $shadow-sm;

  &__options {
    list-style: none;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
  }

  &__item {
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
}
</style>
