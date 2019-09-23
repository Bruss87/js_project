<template lang="html">
<div>
       <li v-on:click="handleClick">{{question.question}}</li>
</div>
</template>

<script>

import {eventBus} from '../main'

export default {
  name: 'questions-list-item',
  props: ['question'],
  methods: {
    handleClick() {
      eventBus.$emit('question-selected', this.question);
    } 

  }

}
</script>

<style lang="css" scoped>
</style>
