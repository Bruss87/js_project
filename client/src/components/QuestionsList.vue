<template lang="html">
  <section>
    <h2>Questions</h2>
    <ul>
    <questions-list-item v-for="question in questions"
    :question="question"
    :key="question._id">
    </questions-list-item>
  </ul>
</section>
</template>
<script>
import QuestionService from '../services/QuestionService';
import QuestionsListItem from './QuestionsListItem'
import {eventBus} from '../main'

export default {
  name: 'questions-list',
  props: ['questions'],
  components: {
    'questions-list-item': QuestionsListItem
  }
}
</script>

<style lang="css" scoped>

</style>
