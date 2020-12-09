<template>
  <teleport to="body">
    <div class="overlay" @click="closeDialog"></div>
    <div class="dialog" v-bind="$attrs">
      <header class="dialog__header">
        <base-heading class="dialog__heading" type="primary" margin="none">
          {{ title }}
        </base-heading>
      </header>
      <div class="dialog__content">
        <slot></slot>
      </div>
      <div class="dialog__actions">
        <slot name="actions">
          <base-button @click="closeDialog">Close</base-button>
        </slot>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  inheritAttrs: false,
  emits: ['close-dialog'],
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba($gray-900, 0.8);
}
.dialog {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: $gray-100;
  font-size: 1.2rem;
  border-radius: 3px;
  color: $gray-700;
  max-width: 32rem;
  width: 100%;
  overflow: hidden;

  &__header {
    background-color: $gray-200;
    padding: 1rem 1.5rem;
  }
  &__header &__heading {
    color: $gray-900;
  }

  &__content {
    min-height: 8rem;
    padding: 1rem 1.5rem;
  }

  &__actions {
    text-align: right;
    padding: 1rem 1.5rem;
  }
}
</style>
