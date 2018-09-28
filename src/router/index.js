import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import goodslist from '@/components/goodslist'
import fenlei from '@/components/fenlei'
import updatapass from '@/components/updatapass'
import Data_management from '@/components/Data_management'
import orderList from '@/components/orderList'

Vue.use(Router)

let router =  new Router({
    routes: [

        {
          path:'/',
          redirect:'/home'
        },
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/home',
          name: 'home',
          component: home,
          meta: { requiresAuth: true },
          props:function(route){
            console.log(route.params);
            return Object.assign({},route.params)
          },
          // props:true,

          children:[
            {
              path:'goodslist',
              name:'goodslist',
              component:goodslist,
              meta: { requiresAuth: true },
            },
            {
              path:'fenlei',
              name:'fenlei',
              component:fenlei,
              meta: { requiresAuth: true },
            },
            {
              path:'updatapass',
              name:'updatapass',
              component:updatapass,
              meta: { requiresAuth: true },
              props:function(route){
              console.log(route.params);
              return Object.assign({},route.params)
              },
            },
            {
              path:'Data_management',
              name:'Data_management',
              component:Data_management,
              meta: { requiresAuth: true },
              props:function(route){
              console.log(route.params);
              return Object.assign({},route.params)
              },
            },
            {
              path:'orderList',
              name:'orderList',
              component:orderList,
              meta: { requiresAuth: true },
            },
          ]
        },  
  
    ]
})


// 路由拦截
// 导航卫士（钩子函数）
// 操作导航卫士时，路由处于暂停状态
router.beforeEach((to, from, next) => {
  console.log(to);

  // 需要登录才允许进入路由
  if(to.meta.requiresAuth){
    // 判断是否登录
    if(sessionStorage.getItem('token')){
      next();
    }else{
      next({
        path:'/login'
      })
    }
  }else{
    // 调用next()方法，放行路由跳转
    next();
  }

});

export default router;