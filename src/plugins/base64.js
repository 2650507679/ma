import {
    Base64
} from 'js-base64';

import Vue from 'vue'

Vue.use(Base64)

export default {
    install(Vue) {

        //两次加密 返回数据
        Vue.prototype.$jiami = function (val) {
            let data = Base64.encode(JSON.stringify(val))
            data = Base64.encode(data)
            return data
        }
        //两次解密 返回
        Vue.prototype.$jiemi = function (val) {

            let data = Base64.decode(val)

            data = Base64.decode(data)

            data = JSON.parse(data)

            return data
        }
    }

}