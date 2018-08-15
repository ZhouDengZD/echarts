import Vue from 'vue';
import echarts from 'echarts';
import App from './App';
import router from './router';
// 修改vue原型链
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />',
});
