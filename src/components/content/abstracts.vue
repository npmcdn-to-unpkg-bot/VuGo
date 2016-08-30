<template>
    <template v-for="abstract_data in abs_data">
        <a v-link="{ name: 'post', params: { postname: abstract_data.meta.slug }}">
            <blob v-bind:data="abstract_data.abstract.image"></blob>
            <text v-bind:data="abstract_data.abstract.text"></text>
        </a>
    </template>
</template>

<script>
import Text from '../media/text'
import Blob from '../media/image'

export default {
  components: {
    Text,
    Blob
  },
  // this where we retrieve state from the store
  vuex: {
    getters: {
      // a state getter function, which will
      // bind `store.state.abstracts_data` on the component as `this.abstracts_data`
      abstracts_data: function (state) {
        return state.abstracts_data
      },
      // a state getter function, which will
      // bind `store.state.tags_data` on the component as `this.tags_data`
      tags_data: function (state) {
        return state.tags_data
      }
    }
  },
  data () {
    return {
      abs_data: this.abstracts_data
    }
  },
  route: {
    data: function (transition) {
      var tagname = transition.to.params.tagname
      if (!tagname) {
        return {
          abs_data: this.abstracts_data
        }
      }
      var abstractsData = this.tags_data[tagname]
      return {
        abs_data: abstractsData
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
