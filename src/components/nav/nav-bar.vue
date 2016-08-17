<template>
    <header class="nav-bar container columns centered" id="header">
        <div class="column col-xs-2"></div>
        <div class="column centered col-xs-8">
            <!-- center-aligned text -->
            <div class="text-center">
                <h1>ⵣ</h1>
                <div class="centered">
                    <nav-item v-bind:items="items"></nav-item>
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
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      items: [
        {
          'title': 'pics',
          'url': '#'
        },

        {
          'title': 'tools',
          'url': '#'
        },

        {
          'title': 'archive',
          'url': '#'
        },

        {
          'title': 'about',
          'url': '#'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
    position: fixed;
    z-index:10;
    right: 0;
    left: 0;
    top: 0;
    padding-bottom: 8em;
    background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 2%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 2%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 2%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
}

h1 {
    padding: 1rem;
}
</style>
