import axios from 'axios';
import qs from 'qs';
import store from '../store/index'
import router from './../router/index'
import storage from "../assets/js/storage";
// import storage from "../assets/js/storage";
axios.defaults.timeout = 5000;
axios.defaults.baseURL ='';
// 或者ES6: import qs from 'qs';

//http request 拦截器

axios.interceptors.request.use(
    config => {
        // const token = this.$store.state.isLogin;
        config.data = qs.stringify(config.data);
        config.headers = {
            // 'Content-Type':'application/json'
            'Content-Type':'application/x-www-form-urlencoded'
        };
            // config.params = {'Authorization':store.state.isLogin}

            if(storage.get("access_token")){
                // config.params = {'Authorization':store.state.isLogin}
                config.headers.Authorization = `Bearer ${storage.get('access_token')}`;
              }


        return config;
    },
    error => {
        return Promise.reject(err);
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            console.log(error.response);
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                // store.commit('removes');
                // router.replace({
                //     name: 'Login',
                //     param: {redirect: router.currentRoute.fullPath}
                // })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    }

);


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.patch(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}
/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function del(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.delete(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}
/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.put(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}
