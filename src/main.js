import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./plugins/axios"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import base_64 from "./plugins/base64"
import * as echarts from 'echarts'
import VabChart from 'vue-echarts';
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.use(base_64)
Vue.use(iView);
Vue.prototype.$axios = axios
Vue.component('VabChart', VabChart);

Vue.config.productionTip = true


new Vue({
    el: "#app",
    render: h => h(App),
    router: router,
    store,
    created() {
    }
})