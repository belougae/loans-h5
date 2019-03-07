import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store/index'
// import storage from '../../src/assets/js/storage'
Vue.use(Router);
const routes = [

    { path: '/HelloWorld', component: resolve=>require(['@components/HelloWorld'],resolve), meta: { navShow: true, cname: '子页面' ,requireAuth:false }},
    { path: '/Home', component: resolve=>require(['@pages/Home/Home'],resolve), meta: { navShow: true, cname: '子页面' ,requireAuth:false }},
    { path: '/Recommend', component: resolve=>require(['@pages/Recommend/Recommend'],resolve), meta: { navShow: true, cname: '子页面' ,requireAuth:false }},
    { path: '/Mine', component: resolve=>require(['@pages/Mine/Mine'],resolve), meta: { navShow: true, cname: '子页面' ,requireAuth:false }},
    { path: '/Helpcenter', component: resolve=>require(['@pages/Mine/components/Helpcenter'],resolve), meta: { navShow: false, cname: '子页面' ,requireAuth:false }},
    { path: '/Privacy', component: resolve=>require(['@pages/Mine/components/Privacy'],resolve), meta: { navShow: false, cname: '子页面' ,requireAuth:false }},
    { path: '/Calculator', component: resolve=>require(['@pages/Home/components/Calculator'],resolve), meta: { navShow: false, cname: '子页面' ,requireAuth:false }},
    { path: '/Login', component: resolve=>require(['@pages/Login/Login'],resolve), meta: { navShow: false, cname: '子页面' ,requireAuth:false }},
    { path: '*', redirect: '/Recommend'}   /*默认跳转路由*/
];

    // if (storage.get('token')) {
    //     store.commit('isLogins', storage.get('token'))
    //     alert(1);
    // }


const router = new Router({
    // mode:'history',
    routes // （缩写）相当于 routes: routes
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(r => r.meta.requireAuth)) {
//         // console.log(store.state.token==="");
    
//         if (storage.get('id')) {
//             next();
//             // console.log(11+store.state.token);
//         }
//         else {
//             next({
//                 name: 'Welcome',
//                 param: {redirect: to.fullPath}
//             })
//         }
//     }
//     else {
//         next()
//     }
// })
export default router;

