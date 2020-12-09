<template>
  <div class="selector">
    <div class="selector__preview">
      <img :src="imagePath" alt="Exam Photo" class="selector__image" v-if="imagePath" />
      <span v-else>&nbsp;</span>
    </div>
    <label class="selector__label" for="photoInput">Select Photo</label>
    <input
      class="selector__file-select"
      id="photoInput"
      type="file"
      accept=".jpg, .jpeg, .png"
      ref="fileInput"
      @change="setSelectedImage"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagePath: null,
    };
  },
  emits: ['image-selected'],
  methods: {
    setSelectedImage() {
      const image = this.$refs.fileInput.files[0];
      if (!image || !image.type.startsWith('image')) return;

      this.imagePath = URL.createObjectURL(image);
      this.$emit('image-selected', image);
    },
  },
};
</script>

<style lang="scss" scoped>
.selector {
  text-align: center;

  &__preview {
    @include mx-auto;
    width: 18rem;
    height: 20rem;
    background-color: $gray-700;
    margin-bottom: 2rem;
    border-radius: 2px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__label {
    color: $gray-600;
    padding: 0.5rem 1rem;
    border-radius: 2px;
    border-bottom: 1px solid currentColor;
    cursor: pointer;
    display: inline-block;

    &:hover {
      box-shadow: $shadow-lg;
      transform: translateY(-3px);
      background-color: $gray-900;
      color: $gray-400;
      border-color: transparent;
    }

    &:active {
      box-shadow: $shadow-md;
      transform: translateY(0);
    }
  }

  &__file-select {
    display: none;
    visibility: hidden;
  }
}
</style>
