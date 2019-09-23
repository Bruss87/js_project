<template lang="html">
  <form v-on:submit="handleSubmit">
    <h1>Add a new card</h1>
    <label for="question">Add a question</label>
    <input type="text" v-model="question" required>
    <label for="answer">Add an answer</label>
    <input type="text" v-model="answer" required>
    <label for="url">Add a URL</label>
    <input type="text" v-model="url">
    <label for="topic">Add a topic</label>
    <input type="text" v-model="topic">
    <input type="submit" name="submit" value="Save">
  </form>
</template>

<script>

import {eventBus} from '@/main';
import CardService from '@/services/CardService';

export default {
  name: "add-card-form",
  data() {
    return {
      question: "",
      answer: "",
      url: "",
      topic: ""
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      const card = {
        question: this.question,
        answer: this.answer,
        url: this.url,
        topic: this.topic
      }
      CardService.addCard(card)
      .then(res => eventBus.$emit('submit-card', res));

    }
  }
}
</script>

<style lang="css" scoped>
</style>
