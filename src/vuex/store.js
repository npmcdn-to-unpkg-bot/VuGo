import Vue from 'vue'
import Vuex from 'vuex'
import abstractsData from '../../data/abstracts.json'
import navData from '../../data/nav.json'
import postsData from '../../data/posts.json'
import tagsData from '../../data/tags.json'

// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  abstracts_data: abstractsData,
  nav_data: navData,
  posts_data: postsData,
  tags_data: tagsData,
  about_data: postsData['about']
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state
})
