<template>
    <div>
        <elcontainer>
           <el-header class="header">顶部</el-header>
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
                      <el-submenu index="1">
                        <template slot="title">
                         <i class="el-icon-goods"></i>
                          <span>商品管理</span>
                        </template>
                        <el-menu-item-group>
                          
                          <el-menu-item index="1-1">商品分类</el-menu-item>
                          <el-menu-item index="1-2">商品列表</el-menu-item>
                        </el-menu-item-group>
                        
                        
                      </el-submenu>

                      <el-submenu index="2">
                        <template slot="title">
                          <i class="el-icon-menu"></i>
                          <span>用户管理</span>
                        </template>
                        <el-menu-item-group>
                          <el-menu-item index="2-1">修改密码</el-menu-item>
                          <el-menu-item index="2-2">资料管理</el-menu-item>
                        </el-menu-item-group> 
                      </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>交易管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-2">订单管理</el-menu-item>
                        </el-menu-item-group>
                        
                      </el-submenu>
                    
                    </el-menu>
                  </el-col>
                </el-row>
                </el-aside>
                <el-main class="main">主要的</el-main>
           </div>
               
           
        </elcontainer>
    </div>
   
</template>


<style type="text/css">
    .header{
        background:pink;

    }
    .aside{
       
        float: left;
        min-height: 500px;
    }
    .aside .tac{
        min-height: 400px;
    }
    .main{
        background:#58bc58;
    }

</style>