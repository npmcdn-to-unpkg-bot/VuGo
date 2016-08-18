<template>
    <!-- use v-link directive for navigation. -->
    <a v-link="{ path: item.slug }" class="nav-item" v-for="item in items">{{ item.title | uppercase }}</a>
</template>

<script>
export default {
  props: ['items']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
