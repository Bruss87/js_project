<template lang="html">
  <form class="update-form" v-on:submit.prevent="handleUpdate">
    <h1>Update Question</h1>

    <label for="question">Question:</label>
    <textarea id="question"  v-model="question" required></textarea>

    <label for="answer">Answer:</label>
    <textarea id="answer" v-model="answer" required></textarea>

    <label for="url">Topic:</label>
    <textarea id="topic" v-model="topic"></textarea>

    <label for="url">Add a link:</label>
    <textarea id="url" v-model="url"></textarea>

    <input type="submit" value="Update" id="update" />
  </form>
</template>

<script>
import { eventBus } from '@/main';
import QuestionService from '@/services/QuestionService.js'

export default {
  name: 'question-update-form',
  data() {
    return {
      question: this.selectedQuestion.question,
      answer: this.selectedQuestion.answer,
      url: this.selectedQuestion.url,
      topic: this.selectedQuestion.topic,
      isMastered: false
    };
  },
  watch: {
    selectedQuestion: function (newQuestion) {
      this.question = this.selectedQuestion.question;
      this.answer = this.selectedQuestion.answer;
      this.url = this.selectedQuestion.url;
      this.topic = this.selectedQuestion.topic;
      this.isMastered = this.selectedQuestion.isMastered;
    }
  },
  props: ['selectedQuestion'],
  methods: {
    handleUpdate(event) {
      event.preventDefault();
      eventBus.$emit('question-update', Object.assign({}, this.selectedQuestion, this.$data));
      this.question = '',
      this.answer = '',
      this.topic = '',
      this.isMastered = false
    },
    
  }
}
</script>

<style lang="css" scoped>

.update-form{
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  text-align: center;
  color: purple;
  display: inline-grid;
}

</style>
