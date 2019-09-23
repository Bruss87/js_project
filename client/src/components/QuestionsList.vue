<template>
  <section>
    <h2>Questions</h2>
    <div>
      <questions-list-item v-for="card in questions" :key="card._id" :card="card"/>
    </div>
  </section>
</template>
<script>
import CardService from '../services/CardService';
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

<style>

</style>
