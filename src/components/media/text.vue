<template>
    <!-- Text columns -->
    <div class="columns">
        <div class="column col-xs-1 col-sm-2 col-md-2 col-lg-3 col-xl-4 hide-xs"></div>
        <div class="column col-xs-10 col-sm-8 col-md-8 col-lg-6 col-xl-4">
        <div class="text-left">
                {{{ data }}}
            </div>
        <div class="column col-xs-1 col-sm-2 col-md-2 col-lg-3 col-xl-4 hide-xs"></div>
    </div>
    <!-- End text columns -->
</template>

<script>
export default {
  props: ['data']
}
</script>
