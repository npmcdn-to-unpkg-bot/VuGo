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
import navItems from '../../../data/nav.json'

export default {
  components: {
    NavItem
  },
  data () {
    return {
      nav_items: navItems
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
