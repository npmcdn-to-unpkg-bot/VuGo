<template>
    <template v-for="media in p_data.content">
    <!-- Text columns -->
    <div class="columns">
        <div class="column col-xs-1 col-sm-2 col-md-2 col-lg-3 col-xl-4 hide-xs"></div>
        <div class="column col-xs-10 col-sm-8 col-md-8 col-lg-6 col-xl-4">
            <div class="text-left">
                <div v-if="$loadingRouteData">Loading ...</div>
                <template v-else>
                <text v-if="media.type == 'text'" v-bind:data="media.data"></text>
                </template>
            </div>
        </div>
        <div class="column col-xs-1 col-sm-2 col-md-2 col-lg-3 col-xl-4 hide-xs"></div>
    </div>
    <!-- End text columns -->

    <!-- Image Columns -->
    <div class="columns">
        <template v-if="!$loadingRouteData">
        <blob v-if="media.type == 'image'" v-bind:data="media.data"></blob>
        </template>
    </div>
    <!-- End Image Columns -->
    </template>

    <!-- Begin comments -->
    <div v-if="p_data.meta.disqus" class="columns">
        <div class="column col-xs-1 col-sm-2 col-md-2 col-lg-3 col-xl-4 hide-xs"></div>
        <div class="column col-xs-10 col-sm-8 col-md-8 col-lg-6 col-xl-4">
            <template v-if="!$loadingRouteData">
            <disqus shortname="data.meta.disqus.shortname"></disqus>
            </template>
        </div>
        <div class="column col-xs-1 col-sm-2 col-md-2 col-lg-3 col-xl-4 hide-xs"></div>
    </div> 
    <!-- End comments -->
</template>

<script>
import Disqus from 'vue-disqus'
import Text from '../media/text'
import Blob from '../media/image'

export default {
  components: {
    Disqus,
    Text,
    Blob
  },
  // this where we retrieve state from the store
  vuex: {
    getters: {
      // a state getter function, which will
      // bind `store.state.post_data` on the component as `this.post_data`
      post_data: function (state) {
        return state.posts_data
      }
    }
  },
  data: function () {
    var postname = this.$route.params.postname
    return {
      p_data: this.post_data[postname]
    }
  },
  route: {
    data: function (transition) {
      var postname = transition.to.params.postname
      var postData = this.post_data[postname]
      if (!postData) {
        this.$router.go({
          name: 'archive'
        })
      } else {
        return {
          p_data: postData
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
