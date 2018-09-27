<template>
    <div>

      <el-header class="header" height>
        <h1>凡客后台管理系统</h1>
        <div class="welcome">
          <span>
              欢迎<span></span>登陆我们的凡客后台系统，在这里你可以为所欲为
          </span>
          <el-button size="mini">退出</el-button>
        </div>
      </el-header>
      
      <el-aside class="aside" width>
        <el-row class="tac">
          <el-col :span="12">
            <h3>功能分类</h3>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#9fcdf1"
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
        background:#9fcdf1;
        font-size: 14px;
        font-family: PingFang SC;
        padding:10px 0;
        height:80px;
    }
    .header h1{
      line-height:30px;margin:0;font-size:30px;padding-left:20px;
    }
    .header .welcome{float:right;padding-right:20px;}
    .aside{
        float: left;
        min-height: 550px;
        width:250px;
        text-align:center;
        background:#f5f5f5;
    }
    .aside .el-menu-item{
      background:rgb(68, 167, 224)
    }
    .el-col-12{
        width: 100%;
    }
    .main{
       
    }

</style>