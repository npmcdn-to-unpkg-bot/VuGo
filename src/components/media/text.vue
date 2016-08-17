<template>
    <!-- Text columns -->
    <div class="columns">
        <div class="column col-xs-1 col-sm-2 col-md-2 col-lg-3 col-xl-4 hide-xs"></div>
        <div class="column col-xs-10 col-sm-8 col-md-8 col-lg-6 col-xl-4">
            <!-- center-aligned text -->
            <div class="text-center">
                <h1>{{ data.headline }}</h1>
                <h2 class="subheadline">{{ data.subheadline  }}</h2>
                <p class="ptop date">{{ data.date }}</p>
            </div>
            <!-- center-aligned text -->
            <div class="text-left">
                {{ data.text }}
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
