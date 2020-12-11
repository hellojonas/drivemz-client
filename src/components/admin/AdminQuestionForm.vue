<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form__inputs">
      <div class="form__left">
        <!-- Question -->
        <form-control>
          <form-label for="question">Question</form-label>
          <text-area v-model.trim="questionText" id="question"> </text-area>
          <form-input-error mt="xs" v-if="!errors.questionText"
            >Question must no be empty
          </form-input-error>
        </form-control>

        <!-- Number of options -->
        <form-control>
          <form-label>Number of options</form-label>
          <option-selector
            :options="numberOfOptionsList"
            v-model="numberOfOptions"
          ></option-selector>
          <form-input-error mt="none" v-if="!errors.numberOfOptions">
            Question must have at least 2 options
          </form-input-error>
        </form-control>

        <!-- Options -->
        <form-control v-for="option in optionsList" :key="option.value">
          <form-label :for="'option' + option.number">
            {{ 'Option ' + option.number }}
          </form-label>
          <text-input v-model.trim="options[option.number - 1].text" :id="'option' + option.number">
          </text-input>
        </form-control>
        <form-input-error mt="none" v-if="!errors.options"
          >One or more options is empty
        </form-input-error>

        <!-- Correct Option -->
        <form-control>
          <form-label>Correct option</form-label>
          <option-selector :options="optionsList" v-model="correctOption"></option-selector>
          <form-input-error mt="none" v-if="!errors.correctOption">
            Question must have a correct option
          </form-input-error>
        </form-control>

        <!-- Category -->
        <form-control>
          <form-label>Category</form-label>
          <option-selector :options="categoryList" v-model="category"></option-selector>
          <form-input-error mt="none" v-if="!errors.category"
            >Question must have a category
          </form-input-error>
        </form-control>
      </div>

      <div class="form__right">
        <!-- Image -->
        <form-label>Photo</form-label>
        <photo-selector @image-selected="setImage"></photo-selector>
        <form-input-error mt="xs" v-if="!errors.image"
          >Question must have an image
        </form-input-error>
      </div>
    </div>

    <div class="form__btn-box">
      <base-button v-if="modeIsEdit" rounded>Save question</base-button>
      <base-button v-else rounded>Add question</base-button>
    </div>
  </form>
</template>

<script>
import FormControl from '@/components/ui/form/FormControl.vue';
import TextArea from '@/components/ui/form/TextArea.vue';
import TextInput from '@/components/ui/form/TextInput.vue';
import PhotoSelector from '@/components/ui/form/PhotoSelector.vue';
import FormLabel from '@/components/ui/form/FormLabel.vue';
import OptionSelector from '@/components/ui/form/OptionSelector.vue';
import FormInputError from '@/components/ui/form/FormInputError.vue';
// import flatten from 'flat';

export default {
  components: {
    TextArea,
    TextInput,
    FormControl,
    PhotoSelector,
    FormLabel,
    OptionSelector,
    FormInputError,
  },
  props: {
    mode: {
      type: String,
      validator: function v(m) {
        return m === undefined || ['edit', 'create'].includes(m);
      },
    },
    question: Object,
  },
  emits: ['form-submited'],
  data() {
    return {
      questionText: '',
      numberOfOptions: '2',
      options: [
        { id: 'option-1', text: '' },
        { id: 'option-2', text: '' },
        { id: 'option-3', text: '' },
        { id: 'option-4', text: '' },
      ],
      image: null,
      correctOption: null,
      category: 'laws',
      categoryList: [
        { text: 'Road Signs', value: 'signs' },
        { text: 'Laws', value: 'laws' },
      ],
      errors: {
        options: true,
        correctOption: true,
        numberOfOptions: true,
        image: true,
        category: true,
        questionText: true,
      },
    };
  },
  computed: {
    optionsList() {
      const list = [];
      for (let i = 0; i < this.numberOfOptions; i += 1) {
        list.push({
          text: `Option ${i + 1}`,
          value: `option-${i + 1}`,
          number: i + 1,
        });
      }
      return list;
    },
    numberOfOptionsList() {
      const list = [];
      for (let i = 1; i < 4; i += 1) {
        list.push({ text: `${i + 1} options`, value: `${i + 1}` });
      }
      return list;
    },
    modeIsEdit() {
      return this.mode === 'edit';
    },
  },
  watch: {
    optionsList() {
      for (let i = this.numberOfOptions; i < 4; i += 1) {
        this.options[i].text = '';
      }
    },
  },
  methods: {
    resetError() {
      Object.keys(this.errors).forEach((key) => {
        this.errors[key] = true;
      });
    },
    formIsValid() {
      if (this.questionText === '') {
        this.errors.questionText = false;
      }
      if (this.numberOfOptions < 2) {
        this.errors.options = false;
      }
      if (this.correctOption === '' || this.correctOption == null) {
        this.errors.correctOption = false;
      }
      if (this.category === '') {
        this.errors.category = false;
      }
      if (this.image === null) {
        this.errors.image = false;
      }

      this.options.forEach((option, idx) => {
        if (option.text === '' && idx < this.numberOfOptions) {
          this.errors.options = false;
        }
      });

      return Object.keys(this.errors).every((item) => this.errors[item]);
    },
    submitForm() {
      this.resetError();
      if (!this.formIsValid()) {
        return;
      }
      const data = new FormData();

      data.append('questionText', this.questionText);

      const options = this.options
        .map((option) => ({ ...option, _id: option.id }))
        .filter((_, idx) => idx < +this.numberOfOptions);

      data.append('options', JSON.stringify(options));
      data.append('image', this.image);
      data.append('category', this.category);
      data.append('correctOption', this.correctOption);

      this.$emit('form-submited', data);
    },
    setImage(img) {
      this.image = img;
    },
    initData() {
      this.questionText = this.question.questionText;
      this.numberOfOptions = this.question.options.length;
      this.options = this.question.options;
      this.image = this.question.image;
      this.correctOption = this.image.correctOption;
      this.category = this.question.category;
    },
  },
  mounted() {
    if (this.modeIsEdit) {
      this.initData();
    }
  },
};
</script>

<style lang="scss" scoped>
.form {
  &__inputs {
    @include media('sm') {
      display: flex;
      justify-content: space-evenly;
      @include mx-auto;
    }
  }

  &__left {
    flex: 0 0 60%;
  }

  &__right {
    flex: 0 0 30%;
    text-align: center;
  }

  &__btn-box {
    text-align: center;
    margin-top: 2.5rem;
  }
}
</style>
