<template lang="html">
  <div>
    <li v-on:click="handleClick">{{card.question}}</li>
  </div>
</template>

<script>

import {eventBus} from '../main'

export default {
  name: 'questions-list-item',
  props: ['card'],
  methods: {
    handleClick() {
      eventBus.$emit('card-selected', this.card);
    }
  }

}
</script>

<style lang="css" scoped>
</style>
