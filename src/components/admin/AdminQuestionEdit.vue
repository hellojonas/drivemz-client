<template>
  <base-heading mb="lg">Create a question</base-heading>
  <admin-questions-form mode="edit" @form-submited="saveQuestion"></admin-questions-form>
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
  data() {
    return {
      error: null,
      msgSucess: null,
      timer: null,
    };
  },
  computed: {},
  methods: {
    async saveQuestion(data) {
      try {
        await axios.patch('http://localhost:3090/api/v1/question', data);
        this.msgSucess = 'Question added successfully';
        this.timer = setTimeout(() => {
          this.$router.push('/admin/questions');
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
      this.$router.push('/admin/questions');
    },
  },
};
</script>

<style lang="scss" scoped></style>
