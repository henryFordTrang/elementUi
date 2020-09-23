import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/ts.css'
import nancy1 from './components/nancy.vue'
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
// 自定义v-x
Vue.directive('mlgb', {
  bind: function (el, binding) {
    el.style.color = binding.value
  }
})
Vue.directive('nancy', {
  inserted: function (el) {
    el.style.color = 'white'
    el.style.fontSize = '20px'
    el.style.textAlign = 'left'
    el.style.display = 'inline-block'
    el.style.verticalAlign = 'middle'
  }
})
Vue.filter('trang', (value) => {
  return value + 'i miss trang'
})
// 自定义v-x end
Vue.component('nancy', nancy1)
Vue.prototype.$util = {
  basicUrl () {
    return window.location.href.split('/#')[0]
    // return window.location.pathname.split("/phone")[0];
  }
}
// 路由钩子--判断是否登录过了
// router.beforeEach((to, from, next)=>{
// console.log(store.state.encryptVal)
// if(from.path!='/'&&store.state.encryptVal=='yes'||to.path=='/login'){

//   next();
// }else{
//   next({path: '/test'})
// }

// })
new Vue({
  methods: {

  },
  created () {

  },
  store,
  router,
  render: h => h(App)
}).$mount('#app')
