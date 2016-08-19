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
import tagsData from '../../../data/tags.json'

export default {
  components: {
    Text,
    Blob
  },
  route: {
    data: function (transition) {
      var tagname = transition.to.params.tagname
      if (!tagname) {
        return {
          abstracts_data: abstractsData
        }
      }
      var data = tagsData[tagname]
      if (!data) {
        this.$router.go({
          path: '/'
        })
      } else {
        return {
          abstracts_data: data
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
