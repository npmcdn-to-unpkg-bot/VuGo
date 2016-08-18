<template>
    <template v-for="abstract_data in abstracts_data">
        <a v-link="{ name: 'post', params: { postname: abstract_data.meta.slug }}">
            <blob v-bind:data="abstract_data.abstract.image"></blob>
            <text v-bind:data="abstract_data.abstract.text"></text>
        </a>
    </template>
</template>

<script>
import Text from '../media/text'
import Blob from '../media/image'
import abstractsData from '../../../data/abstracts.json'

export default {
  components: {
    Text,
    Blob
  },
  data () {
    return {
      abstracts_data: abstractsData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
