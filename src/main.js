import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes/router'
import stores from './store/index';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Antd)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const store = new Vuex.Store({
    namespaced: true,
    modules: stores,
});

const router = new VueRouter({
    mode:'history',
    routes // (缩写) 相当于 routes: routes
})

new Vue({
    router,
    store,
    render: h => h(App),
})
    .$mount('#app')
