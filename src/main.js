import Vue from 'vue'
import App from './App'
import Abstracts from './components/content/abstracts'
import Post from './components/content/post'

var VueRouter = require('vue-router')
Vue.use(VueRouter)

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter({
  history: true
})

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
  '/': {
    component: Abstracts,
    name: 'root'
  },
  '/:postname': {
    component: Post,
    name: 'post'
  },
  '/archive': {
    component: Abstracts,
    name: 'archive'
  },
  '/tag/:tagname': {
    component: Abstracts,
    name: 'tag'
  }
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start({
  components: { App }
}, 'body')
