import Vue from 'vue'
import Router from 'vue-router'
import GenerateRoutes from './router.g';
Vue.use(Router)

export default new Router({
  routes: [
    ...GenerateRoutes
  ]
})
