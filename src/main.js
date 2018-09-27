// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


// 引入axios
import axios from 'axios';
Vue.prototype.$ajax = axios;

//引入loading组件

import {Loading} from 'element-ui';
let loadinginstace;

//请求拦截
axios.interceptors.request.use(config =>{
    console.log('请求拦截：',config)


    //给所有post且带参数的请求添加Content-Type
    if(config.method === 'post'){
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    loadinginstace = Loading.service({
        fullscreen:true
    })

    return config;

})

// 响应拦截：关闭loading
axios.interceptors.response.use(data => { // 响应成功关闭loading
    loadinginstace.close();

    // 对数据进行处理
    // 处理后必须返回数据，才能在then中接收

    return data;
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
