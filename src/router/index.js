import Vue from 'vue'
import Router from 'vue-router'
import GenerateRoutes from './route.g';
Vue.use(Router)

export default new Router({
  routes: [
    ...GenerateRoutes
  ]
})
