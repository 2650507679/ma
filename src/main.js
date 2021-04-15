import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'
import base64 from './plugins/base64'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
//引入插件
Vue.prototype.$axios=axios
Vue.prototype.$jiami=base64.jiami
Vue.prototype.$jiemi=base64.jiemi

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
