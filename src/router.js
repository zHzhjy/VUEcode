import VueRouter from 'vue-router'

//导入 路由组件
import HomeContainer from './cmponents/tabbar/HomeContainer.vue'
import MemberContainer from './cmponents/tabbar/MemberContainer.vue'
import ShopcarContainer from './cmponents/tabbar/ShopcarContainer.vue'
import SearchContainer from './cmponents/tabbar/SearchContainer.vue'
import NewList from './cmponents/news/NewList.vue'
import Newinfo from './cmponents/news/Newinfo.vue'
import PhotoList from './cmponents/photos/PhotoList.vue'



// 3. 创建路由对象
var router = new VueRouter({
  routes: [ //路由规则
	{ path: '/home', component: HomeContainer},
	{ path: '/member', component: MemberContainer},
	{ path: '/shopcar', component: ShopcarContainer},
	{ path: '/search', component: SearchContainer},
	{ path: '/home/newslist', component: NewList},
	{ path: '/home/newinfo', component: Newinfo},
	{ path: '/home/photolist', component: PhotoList }
  ],
  linkActiveClass: 'mui-active' //覆盖默认路由高亮类
})

// 把路由对象暴露出去
export default router