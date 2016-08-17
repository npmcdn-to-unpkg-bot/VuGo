<template>
    <!-- 100% width row -->
    <div class="columns">
        <div class="column col-xs-12">
            <img src="static/img/digital-horizontal.jpg" class="img-responsive img-pad" />
        </div>
    </div>			
    <!-- End single image -->
</template>

<script>
export default {
  props: ['items']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a, .btn.btn-link {
    font: 300 1.8rem 'Roboto', sans-serif;
    color: #424242;
    color: rgb(66, 66, 66);
    background-color: transparent;
    text-decoration: none;
    border-bottom: 0.1rem solid #494949;
}
.btn.btn-link {
    border-bottom: none;
}
.btn {
    padding: .7rem 1.5rem;
}
</style>
