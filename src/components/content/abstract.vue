<template>
  <div v-for="abstract_data in abstracts_data">
    <blob v-bind:data="abstract_data.abstract.image"></blob>
    <text v-bind:data="abstract_data.abstract.text"></text>
  </div>
</template>

<script>
import Text from '../media/text'
import Blob from '../media/image'

export default {
  components: {
    Text,
    Blob
  },
  props: ['abstracts_data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
