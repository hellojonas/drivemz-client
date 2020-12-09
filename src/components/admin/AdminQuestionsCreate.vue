<template>
  <base-heading mb="lg">Create a question</base-heading>
  <admin-questions-form :mode="'create'" @form-submited="addQuestion"></admin-questions-form>
  <base-dialog v-if="!!error" title="Oops!" @close-dialog="closeErrorDialog">
    <base-paragraph>{{ error }}</base-paragraph>
  </base-dialog>
  <base-dialog v-if="!!msgSucess" title="Success" @close-dialog="closeSuccessDialog">
    <base-paragraph>{{ msgSucess }}</base-paragraph>
  </base-dialog>
</template>

<script>
import axios from 'axios';
import BaseDialog from '@/components/ui/BaseDialog.vue';
import AdminQuestionsForm from './AdminQuestionForm.vue';

export default {
  components: {
    AdminQuestionsForm,
    BaseDialog,
  },
  inject: ['switchToTab'],
  data() {
    return {
      error: null,
      msgSucess: null,
      timer: null,
    };
  },
  computed: {},
  methods: {
    async addQuestion(data) {
      try {
        await axios.post('http://localhost:3090/api/v1/question', data);
        this.msgSucess = 'Question added successfully';
        this.timer = setTimeout(() => {
          this.switchToTab('admin-questions-view');
        }, 3000);
      } catch (error) {
        this.error = 'Failded to add question. please try again later';
      }
    },
    closeErrorDialog() {
      this.error = null;
    },
    closeSuccessDialog() {
      if (!this.timer) {
        return;
      }
      clearInterval(this.timer);
      this.msgSucess = null;
      this.switchToTab('admin-questions-view');
    },
  },
};
</script>

<style lang="scss" scoped></style>
