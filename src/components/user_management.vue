<template>
  <div class="goods">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="登陆名">
        <el-input v-model="formInline.user" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="formInline.phone" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="formInline.email" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="formInline.region" placeholder="请选择分类">
          <el-option label="超级管理员" value="超级管理员"></el-option>
          <el-option label="管理员" value="管理员"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search"></el-button>
      </el-form-item>
    </el-form>

    <el-row class="button">
      <el-button type="primary">删除</el-button>
      <el-button type="primary" @click="addgoods">添加</el-button>
    </el-row>

    <el-table
      border
      ref="multipleTable"
      :data="goodslist.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        property="id"
        label="ID"
        width="80">
      </el-table-column>
      <el-table-column fiexd
        prop="admin"
        label="登陆名"
      >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机"
     >
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
       >
      </el-table-column>
      <el-table-column
        prop="Role"
        label="角色"
       >
      </el-table-column>
      <el-table-column 
        prop="data"
        label="加入时间"
       >
      </el-table-column>
       <el-table-column 
        prop="asse"
        label="审核状态"
   >
      </el-table-column>
      <el-table-column label="操作" width="185" fixed="right">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini"
            @click="open2(scope.$index,scope.row) ">删除</el-button>
        </template>
      </el-table-column>
    </el-table> 

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="current_change"
        :current-page="currentPage"
        
        :page-size="7"
        layout="total, prev, pager, next, jumper"
        :total="total" >
      </el-pagination>
    </div>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
        <el-form >
          <el-form-item label="ID" :label-width="formLabelWidth" disabled="disabled">
          <el-input v-model="currentRow.id" autocomplete="off" readonly="readonly"></el-input>
          </el-form-item>
          <el-form-item label="登陆名" :label-width="formLabelWidth">
          <el-input v-model="currentRow.admin" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机" :label-width="formLabelWidth">
          <el-input v-model="currentRow.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="currentRow.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="角色" :label-width="formLabelWidth">
          <el-input v-model="currentRow.Role" autocomplete="off"></el-input>
          </el-form-item>
           <el-form-item label="审核状态" :label-width="formLabelWidth">
          <el-input v-model="currentRow.asse" autocomplete="off"></el-input>
          </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="savegoods">确 定</el-button>
      </div>
    </el-dialog>

  </div> 
</template>

<script>
  export default { 
    data() {
      return {
        goodslist:[],


        total:0,//默认数据总数
        pagesize:7,//每页的数据条数
        currentPage:1,//默认开始页面
        title:'修改商品信息',

        formInline: {
            user: '',
            region: ''
        },
        currentRow:{},
        dialogFormVisible: false,
        formLabelWidth: '120px',
     

      }
    },

    methods: {

      //发送post请求获取数据
      getGoodslist() {
        this.$axios.get('/api/userlist').then(res => {
          this.goodslist = res.data;
          this.goodslist.forEach(item=>{
            item.data = item.data.slice(0,10);
          })
          this.total = this.goodslist.length;
          console.log(res)
        })
      },
      //获取page
      current_change(currentPage){
           this.currentPage = currentPage;
      },

      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },

      
      
      
      // 编辑当前行
      handleEdit(index, row) {
        console.log(index, row);
        this.title= "修改商品信息";
        this.dialogFormVisible = true;
        this.currentRow = row;

      },

      //添加前先更新
      addgoods(){
        this.dialogFormVisible = true;
        this.currentRow={};
        this.title= "添加商品信息";
      },

      //添加商品信息
      savegoods(){
        this.dialogFormVisible = false;

        console.log(this.currentRow.goodsname)
         this.$axios({
            url:'/api/adduser',
            method:'post',
            data:(()=>{
                    let data = '';
                    for(let key in this.currentRow){
                        data += key + '=' + this.currentRow[key] + '&'
                    }
                    data = data.slice(0);
                    console.log(data)
                    return data;
                })(),


         }).then(res =>{
          console.log(res)

        })

         this.getGoodslist();
      },

      open2(idx,row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.handleDelete(idx,row);
          this.getGoodslist();
          this.$message({  
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
    
      
      // 删除当前行
      handleDelete(index,row) {
     
        console.log(row);
        this.$axios.get('/api/delectuser?id='+row.id).then(res =>{
          this.goodslist = res.data
        })
        this.goodslist.splice(index,1);
      },

      // 选择切换
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },

      // current-change:当表格的当前行发生变化的时候会触发该事件
      // handleCurrentChange(val) {
      //   this.currentRow = val;
      // },

      // selection-change:当选择项发生变化时会触发该事件
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      //实现搜索功能
      onSubmit() {
          console.log('submit!');
          if( this.formInline.user == '' || this.formInline.region == ''){
            this.$message.warning("查询条件不能为空！");
             this.formInline = {}
            return;
          }
         // console.log(this.formInline.user ,this.formInline.region)
         this.$axios.get('/api/search?user='+this.formInline.user+'&region='+this.formInline.region).then(res=>{
            this.goodslist = res.data;
         })

      },

      handleSizeChange(pagesize) {
        console.log(`每页 ${pagesize} 条`);
      },
      handleCurrentChange(pagesize) {
        console.log(`当前页: ${pagesize}`);
      }
    },
    created() {
      this.getGoodslist();
    }
  }
</script>
<style>
  .goods{text-align:left}
  .button{padding:10px 0;border-top:1px solid #eee;}
  .block{padding:10px 0;text-align:center;}
</style>
