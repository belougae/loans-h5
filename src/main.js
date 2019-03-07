// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import Fastclick from 'fastclick'
import 'lib-flexible/flexible.js'
import "./assets/styles/reset.css"
// import VueResource from 'vue-resource'
import {post,get,patch,put,del} from './http/http'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:require('../static/homeimg/loan.png'),
//     loading:require('../static/homeimg/logo.png')
})
Fastclick.attach(document.body);
// Vue.prototype.online = "http://121.196.193.123:9999/"; //测试
// Vue.prototype.online = "http://47.92.210.174:9999/"; //线上
Vue.prototype.online = "https://juzidaikuan.com/"; //线上
// Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$del=del;
Vue.prototype.HOST = '/api';

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
