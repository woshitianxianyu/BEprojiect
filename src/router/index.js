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

export default new Router({
    routes: [
        {
          path: '/',
          name: 'login',
          component: login
        },
        {
          path: '/home',
          name: 'home',
          component: home,
          children:[
            {
              path:'goodslist',
              name:goodslist,
              component:goodslist
            },
            {
              path:'fenlei',
              name:fenlei,
              component:fenlei
            },
            {
              path:'updatapass',
              name:updatapass,
              component:updatapass
            },
            {
              path:'Data_management',
              name:Data_management,
              component:Data_management
            },
            {
              path:'orderList',
              name:orderList,
              component:orderList
            },
          ]
        },  
  
    ]
})
