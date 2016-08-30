<template>
    <template v-for="media in ab_data.content">
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
      // bind `store.state.about_data` on the component as `this.about_data`
      about_data: function (state) {
        return state.about_data
      }
    }
  },
  data () {
    return {
      ab_data: this.about_data
    }
  },
  route: {
    data: function (transition) {
        return {
          ab_data: this.about_data 
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
