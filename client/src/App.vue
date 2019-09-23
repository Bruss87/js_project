<template>
  <div id="app">
    <add-card-form/>
    <questions-list :questions="questions"/>
    <card-info :card="selectedCard"/>
    <card-update-form v-if="selectedCard" :selected-card="selectedCard" />
  </div>
</template>

<script>
import QuestionsList from './components/QuestionsList';
import CardInfo from './components/CardInfo';
import CardUpdateForm from './components/CardUpdateForm';
import CardService from './services/CardService';
import AddCardForm from './components/AddCardForm';
import {eventBus} from '@/main';

export default {
  name: 'app',
  components: {
    'questions-list': QuestionsList,
    'card-info': CardInfo,
    'card-update-form': CardUpdateForm,
    'add-card-form': AddCardForm

  },
  data(){
    return{
      questions: [],
      selectedCard: null
    }
  },
  mounted(){
    CardService.getQuestions()
    .then(questions => this.questions = questions)

    eventBus.$on('card-selected', card => {
      this.selectedCard = card
    });
    eventBus.$on('card-update', cardToUpdate => {
      CardService.updateCard(cardToUpdate)
      const index = this.questions.findIndex(card => card._id === cardToUpdate._id);
      this.questions.splice(index, 1, cardToUpdate);
    });
    eventBus.$on('submit-card', card => {
      this.questions.push(card)
    });

  }
}

</script>

<style>

</style>
