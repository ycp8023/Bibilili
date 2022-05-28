import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Center from '../views/Center'
import Login from '../views/Login'
import Search from '../views/Search'
import Register from '../views/Register'
import user from "@/store/user"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Search
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/center',
    name: 'center',
    component: Center,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 判断访问页面若需要登录且当前未登录，则拦截至登录路由
router.beforeEach((to,from, next) => {
  // 通过Vuex获取用户登录信息
  const userInfo =user.getters.getUser(user.state());

  // 若前往的是登录路由，则保存当前路由到 preRoute 的键值对中，以便登录成功后跳转
  if (to.path === '/login'){
    localStorage.setItem("preRoute",router.currentRoute.fullPath);
  }
  // 若用户未登录且访问的页面需要登录，则跳转至登录页面
  if(!user.userInfo && to.meta.requireAuth) {
    next ({
      name:'Login',
    })
  }
  next()
})
export default router
