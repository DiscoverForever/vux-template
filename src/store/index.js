import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    
  },
  strict: debug,
  plugins: debug ? [logger()] : []
})