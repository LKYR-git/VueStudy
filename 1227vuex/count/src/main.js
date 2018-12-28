import Vue from 'vue'
import App from './App.vue'

// 引入vuex的实例store
import store from './store/index';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})