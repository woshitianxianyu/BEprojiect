<template>
  <div  class="fenlei">
    <el-row class="add">
      <el-button type="primary" @click="addtype">添加</el-button>
    </el-row>
    <el-table
      max-height="500"
      border
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%">

      <el-table-column
        type="index"
        width="50">
      </el-table-column>

      <el-table-column
        property="id"
        label="ID"
        width="100">
      </el-table-column>

      <el-table-column
        property="typename"
        label="分类名">
      </el-table-column>

      <el-table-column label="操作" width="185" fixed="right">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
     <el-dialog :title="title" :visible.sync="dialogFormVisible">
        <el-form >
           <el-form-item label="ID" :label-width="formLabelWidth" disabled="disabled">
          <el-input v-model="currentRow.id" autocomplete="off" readonly="readonly"></el-input>
          </el-form-item>
          <el-form-item label="分类名" :label-width="formLabelWidth">
          <el-input v-model="currentRow.typename" autocomplete="off"></el-input>
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
        tableData: [],
        currentPage: 1,
        currentRow:{},
        title:'添加分类名',
        dialogFormVisible: false,
        formLabelWidth: '100px',
      }
    },
    methods: {

      // current-change:当表格的当前行发生变化的时候会触发该事件
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
 
      handleEdit(index, row) {
        console.log(index, row);
        this.title= "修改商品信息";
        this.dialogFormVisible = true;
        this.currentRow = row;
        
      },
      handleDelete(index, row) {
        console.log(index, row.id);
        // this.$axios.get('/api/delectfenlei?id='+row.id).then(res =>{
        //   this.tableData = res.data
        // })
        // this.tableData.splice(index,1)
      },
      addtype(){
        this.currentRow = {}
        this.dialogFormVisible = true
      },
      savegoods(){
        this.dialogFormVisible = false;
          this.$axios({
            url:'/api/addfenlei',
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
         this.getfenlei();
      },
      getfenlei(){
        this.$axios.get('/api/fenlei').then(res=>{
            console.log(res.data)
            this.tableData = res.data;

        })
      },



    },
    created(){
     
        this.getfenlei()
     
        
    }
  }
</script>
<style>
  .fenlei{text-align: left;}
  .add{margin:10px 0;padding-bottom:20px;border-bottom:1px solid #eee;}
</style>
