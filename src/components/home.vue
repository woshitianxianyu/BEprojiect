<template>
    <div>
        <elcontainer>
           <el-header class="header">
              <!--  <h1>凡客后台管理系统</h1> -->
               <span>
                   欢迎您登陆我们的凡客后台系统，在这里你可以为所欲为
               </span>
              
               <el-button type="primary" >退出</el-button>
               
           </el-header>
           <div>
              <el-aside class="aside">
                <el-row class="tac">
                  
                <el-col :span="12">
                <h5>功能分类</h5>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-submenu :index="idx+1+''"  v-for="(tab,idx) in tabs" >
                      <template slot="title" >
                       <i :class=" 'el-icon-'+tab.icon"></i>
                        <span>{{tab.title}}</span>
                      </template>
                      <el-menu-item-group v-for="(item,i) in tab.items">
                      <el-menu-item :id="item.id"  :index="tab.idx +'-'+ i" @click.bative="getmenu(item.id)" >{{item.name}}</el-menu-item>
                      
                      </el-menu-item-group>
                  
                    </el-submenu>
                  </el-menu>
                  </el-col>
                    </el-row>
                </el-aside>

                <el-main class="main">
                    <router-view/>
                </el-main>
           </div>      
        </elcontainer>
    </div>
   
</template>

<script>
  export default {

    data() {
      return {
        
        tabs:[
          {
            title:'商品管理',
            idx:1,
            items:[
              {
                id:'goodslist',
                name:'商品列表',
              },
              {
                id:'fenlei',
                name:'商品分类',
              }

            ],
            icon:'goods',
          },
          {
            title:'用户管理',
            idx:2,
            
            items:[
              {
                id:'updatapass',
                name:"修改密码",
              },
              {
                id:'Data_management',
                name:"资料管理",
              }

            ],
            
            icon:'menu',
          },
          {
            title:'交易管理',
            idx:3,
            
            items:[
              {
                id:'orderList',
                name:"订单列表",
              },
            ],
           
            icon:'location',
          },
          

        ]
      }
    },
    methods: {
      handleClick(row) {
        // console.log(row);
      },
       handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      getmenu(id){
        console.log(id)
        this.$router.push({path:'/home/'+id});
      }
    },

  }
</script>

<style type="text/css">
    body{
        margin: 0;
    }
    .header{
        background:pink;
        font-size: 12px;
        font-family: PingFang SC;

    }
    .aside{
        float: left;
        background:#545C64;
        min-height: 500px;
    }
    .el-col-12{
        width: 100%;
    }
    .main{
       
    }

</style>