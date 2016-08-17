<template>
  <disqus v-bind:post="post"></disqus>
</template>

<script>
import Disqus from '../comments/disqus.vue'

export default {
  components: {
    Disqus
  },
  props: ['posts']
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
