// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router';
import App from './App';
import store from './store';
import AV from 'leancloud-storage';
import config from 'config/app.config';
Vue.use(ElementUI);

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box');

/** init leancloud sdk */
AV.init({
  appId: config.leancloud_app_id,
  appKey: config.leancloud_app_key
});

/**mock login*/
AV.User.logIn('admin', 'admin!@123');