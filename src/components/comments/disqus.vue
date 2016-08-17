<template>
    <!-- Begin comments -->
    <div class="columns">
        <div class="column col-xs-1 col-sm-2 col-md-2 col-lg-3 col-xl-4 hide-xs"></div>
        <div class="column col-xs-10 col-sm-8 col-md-8 col-lg-6 col-xl-4">
            <!-- center-aligned text -->
            <div id="disqus_thread"></div>
            <script>
                /**
                 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
                 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
                 */
                
                var disqus_config = function () {
                    this.page.url = {{ post.meta.url }};  // Replace PAGE_URL with your page's canonical URL variable
                    this.page.identifier = {{ post.data.id}}; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                };
                
                (function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
                    var d = document, s = d.createElement('script');
                    
                    s.src = '//{{ post.meta.disqus.shortname }}/embed.js';  // IMPORTANT: Replace EXAMPLE with your forum shortname!
                    
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                })();
            </script>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
            </div>
        </div>
        <div class="column col-xs-1 col-sm-2 col-md-2 col-lg-3 col-xl-4 hide-xs"></div>
    </div> 
    <!-- End comments -->
    
    <!-- IMPORTANT: Replace EXAMPLE with your forum shortname! -->
    <script id="dsq-count-scr" src="/{{ post.meta.disqus.shortname }}//count.js" async></script>
</template>

<script>

export default {
  props: ['post']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
