import Vue from 'vue'
import App from './App'
import Abstracts from './components/content/abstracts'
import Post from './components/content/post'
import NotFound from './components/app/not-found.vue'

var VueRouter = require('vue-router')
Vue.use(VueRouter)

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter({
  history: true,
  root: '/'
})

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
  '/:postname': {
    component: Post,
    name: 'post'
  },
  '/archive': {
    component: Abstracts,
    name: 'archive'
  },
  '*': {
    component: NotFound,
    name: '404'
  }
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start({
  components: { App }
}, 'body')
