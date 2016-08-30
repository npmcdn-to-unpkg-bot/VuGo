<template>
    <div id="app">
        <nav-bar></nav-bar>
        <div class="container content">
            <router-view></router-view>
        </div>
  </div>
</template>

<script>
import NavBar from './components/nav/nav-bar'
import store from './vuex/store'

export default {
  components: {
    NavBar
  },
  store: store
}
</script>

<style>
body {
    font: 300 1.8rem 'Roboto', sans-serif;
    color: #424242;
    color: rgb(66, 66, 66);
    background-color: transparent;
    padding: 0;
    margin: 0;
}

h1, .h1 {
    font: 500 2.4rem 'Roboto', sans-serif;
    color: #121212;
    color: rgb(18, 18, 18);
    background-color: transparent; 
    padding-top: 3rem;
}

h2, .h2 {
    font: 500 2rem 'Roboto', sans-serif;
    color: #121212;
    color: rgb(18, 18, 18);
    background-color: transparent;
}

h3, .h3 {
    font: 500 2rem 'Roboto', sans-serif;
    color: #888;
    background-color: transparent;
}

p, blockquote {
    line-height: 1.5em;
    padding-top: 0.5em;
    padding-bottom: 1.0em;
}

blockquote {
    color: #666;
}

.subheadline {
    font: 300 2rem 'Roboto', sans-serif;
    margin-top: -0.5rem;
}

.container {
    margin: 0;
    padding: 0;
}

.content {
    padding-top: 15rem;
}

.row {
    padding: 0 20rem 0 20rem;
}

.column {
    padding: 0rem;
}

.image {
    padding: 0.5rem;
    margin: auto auto;
}

.full-screen-image {
    margin: 0.5rem 0 0.5rem 0;
    padding: 0.5rem 0 0.5rem 0;
}

.date {
    font: 300 1.3rem 'Roboto', sans-serif;
    letter-spacing: 1px;
    color: #424242;
    color: rgb(66, 66, 66);
}

.footer {
    padding-bottom: 3rem;
}

.cover {
    padding: 18rem;
    margin: -10rem 0 -20rem 0;
}

.indent {
    padding-left: 5rem;
}

.ptop {
    padding-top: 2rem;
}

.share {
    background-position: left center;
    background-repeat: no-repeat;
    padding-left: 2.4rem; /* Or size of icon + spacing */
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAN9JREFUOI2V071KQ0EQxfGf8YtUVnkUIYXvIohokfZWplIErWzFgKU+goUWtjaxEkEUUSwFA7HSJhZ7g5BMMffANmfY/86e2YU2BhjjEwdoaaABJjOragIYB4BhdnMLP4G/htUs4DTwv/CCHlYykEpp+w6btb+OK7xjtwbt4Q0fOMZypssurjEyn9VJBjDVYwAYNZn3QuBNMoAN3KIT1M5hEX08KEFu18UubvCKLSWwCk+1d4glODJ/t3sl/R2JpKN0nyXmT3kD0Qnf+M0CLgL/MrN5qjbO/H/nffHIQv0Bb4xCEuAVAN0AAAAASUVORK5CYII=');
   }

.logo {
    padding: 2rem 0 5rem 0;       
}

.skip {
    width: 20rem;
    padding: 7.5rem 0 4rem 0;
}

@media only screen and (max-width: 1280px) {
    .cover {
        padding: 9rem;
        margin: -1rem 0 -8rem 0;
    }

    .nav {
        margin: 0rem 0 5rem 0;
    }
}

@media only screen and (max-width: 1024px) {
    .cover {
        padding: 6rem;
        margin: -1rem 0 -4rem 0;
    }
    .nav {
        margin: 0rem 0 5rem 0;
    }
}

@media only screen and (max-width: 960px) {
    .cover {
        padding: 4rem;
    }

    .nav {
        margin: 0rem 0 7.5rem 0;
    }
}

@media only screen and (max-width: 840px) {
    .cover {
        padding: 2rem;
    }

    .nav {
        margin: 0rem 0 7.5rem 0;
    }

}

@media only screen and (max-width: 600px) {

    .cover {
        padding: 0rem;
    }

    .nav {
        margin: 0rem 0 7.5rem 0;
    }
}

@media only screen and (max-width: 480px) {

    .cover {
        padding: 7.5rem; 
        margin: -1rem 0 -4rem 0;
    }

    .nav {
        margin: 0;
        padding: 0;
    }
}

/* Overwrite the pre border property of spectre.css */
pre {
    background: #f9f9f9 none repeat scroll 0 0;
    border-left: 0.0rem solid #999;
    padding: 0.5rem 0 1.0rem 1.5rem;
}

/* Overwrite properties of prism.css */
:not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: #f9f9f9 none repeat scroll 0 0;
    font-weight: normal;
}

pre[class*="language-"] {
    padding: 0.5rem 0 1.0rem 1.5rem;
    font: 300 1.8rem 'Roboto', sans-serif;
    font-weight: normal;
}

code[class*="language-"], pre[class*="language-"] {
    color: #424242;
    color: rgb(66, 66, 66);
    font-family: Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 1.8rem;
}


/* Overwrite modal spectre.css styles */
.modal-container .modal-body {
    max-height: auto;
    overflow-y: visible;
    padding: 2.5rem;
    position: relative;
    padding-bottom: 0.5rem;
}
</style>
