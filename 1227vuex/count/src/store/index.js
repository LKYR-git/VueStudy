
import Vue from 'vue';
import Vuex from 'vuex';
//监听的作用
import createLogger from 'vuex/dist/logger';

import app from './modules/app';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    plugins:[createLogger()]
  }
})
