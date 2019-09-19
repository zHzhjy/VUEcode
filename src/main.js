//入口文件
import Vue from 'vue'
//路由
import VueRouter from 'vue-router'
 Vue.use(VueRouter)

// 导入vue-resource
import Vueresource from 'vue-resource'
Vue.use(Vueresource)

//定义全局过滤器 解决时间问题的 (接口备用 现在自己写死的用不上)
/*  npm install moment --save  -s  安装日期处理类库 moment.js
    然后 import moment from 'moment' 导入
var .filters('dataFromat', function (dataStr,parent = " YYYY-MM-DD HH:mm:ss"){
    return  moment(dataStr).fromat(pattern)
})
*/



// mint-ui组件

import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Lazyload);
// Mui 样式
import  './lib/mui-ui/css/mui.min.css'
import  './lib/mui-ui/css/icons-extra.css'




//导入路由模块
import router from './router.js'


//app 组件	
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router // 挂载路由对象到实例上
})