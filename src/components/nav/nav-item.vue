<template>
  <a href="{{ item.url }}" class="nav-item" v-for="item in items">{{ item.title | uppercase }}</a>
</template>

<script>
export default {
  props: ['items']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    font: 300 1.8rem 'Roboto', sans-serif;
    color: #424242;
    color: rgb(66, 66, 66);
    background-color: transparent;
    text-decoration: none;
    border-bottom: none; 
    padding: .7rem 1.5rem;
}

</style>
