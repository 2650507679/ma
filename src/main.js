import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./plugins/axios"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible'
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = true


new Vue({
    el: "#app",
    render: h => h(App),
    router: router,
    store,
    created() {
    }
})