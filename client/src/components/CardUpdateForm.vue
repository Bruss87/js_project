<template lang="html">
  <form v-on:submit.prevent="handleUpdate">
    <h2>Update Question</h2>
    <label for="question">Question:</label>
    <input type="text" id="question" :placeholder="selectedCard.question" v-model="question" required></input>

    <label for="answer">Answer:</label>
    <input type="text" id="answer" :placeholder="selectedCard.answer" v-model="answer" required></input>

    <label for="url">Topic:</label>
    <input type="text" id="topic" :placeholder="selectedCard.topic" v-model="topic"></input>

    <!-- <label for="url">Add a link:</label>
    <input type="text" id="url" v-model="url"></input> -->

    <input type="submit" value="Update" id="update" />
  </form>
</template>

<script>
import { eventBus } from '@/main';
import CardService from '@/services/CardService.js'

export default {
  name: 'card-update-form',
  data() {
    return {
      question: '',
      answer: '',
      // url: '',
      topic: ''
    };
  },
  props: ['selectedCard'],
  methods: {
    handleUpdate(event) {
      event.preventDefault();
      eventBus.$emit('card-update', Object.assign({}, this.selectedCard, this.$data));
      this.question = '',
      this.answer = '',
      this.topic = ''

    }
  }
}
</script>

<style lang="css" scoped>
</style>
