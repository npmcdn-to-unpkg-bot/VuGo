<template>
    <header class="nav-bar container columns centered" id="header">
        <div class="column col-xs-2"></div>
        <div class="column centered col-xs-8">
            <!-- center-aligned text -->
            <div class="text-center">
                <h1>ⵣ</h1>
                <div class="centered" id="nav-bar">
                    <nav-item v-bind:items=nav_items></nav-item>    
                </div>
            </div>
        </div>
        <div class="column col-xs-2"></div>
    </header>    
</template>

<script>
import NavItem from './nav-item'

export default {
  components: {
    NavItem
  },
  // this where we retrieve state from the store
  vuex: {
    getters: {
      // a state getter function, which will
      // bind `store.state.nav_data` on the component as `this.post_data`
      nav_data: function (state) {
        return state.nav_data
      }
    }
  },
  data: function () {
    return {
      nav_items: this.nav_data
    }
  },
  route: {
    data: function (transition) {
      return {
        nav_items: this.nav_data
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
