<template>
    <template v-for="media in post_data.content">
    <!-- Text columns -->
    <div class="columns">
        <div class="column col-xs-1 col-sm-2 col-md-2 col-lg-3 col-xl-4 hide-xs"></div>
        <div class="column col-xs-10 col-sm-8 col-md-8 col-lg-6 col-xl-4">
            <div class="text-left">
                <text v-if="media.type == 'text'" v-bind:data="media.data"></text>
            </div>
        </div>
        <div class="column col-xs-1 col-sm-2 col-md-2 col-lg-3 col-xl-4 hide-xs"></div>
    </div>
    <!-- End text columns -->

    <!-- Image Columns -->
    <div class="columns">
        <blob v-if="media.type == 'image'" v-bind:data="media.data"></blob>
    </div>
    <!-- End Image Columns -->
    </template>

    <!-- Begin comments -->
    <div v-if="post_data.meta.disqus" class="columns">
        <div class="column col-xs-1 col-sm-2 col-md-2 col-lg-3 col-xl-4 hide-xs"></div>
        <div class="column col-xs-10 col-sm-8 col-md-8 col-lg-6 col-xl-4">
            <disqus shortname="post_data.meta.disqus.shortname"></disqus>
        </div>
        <div class="column col-xs-1 col-sm-2 col-md-2 col-lg-3 col-xl-4 hide-xs"></div>
    </div> 
    <!-- End comments -->
</template>

<script>
import Disqus from 'vue-disqus'
import Text from '../media/text'
import Blob from '../media/image'
import postData from '../../../data/posts.json'

export default {
  components: {
    Disqus,
    Text,
    Blob
  },
  route: {
    data: function (transition) {
      var postname = transition.to.params.postname
      return {
        post_data: postData[postname]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
