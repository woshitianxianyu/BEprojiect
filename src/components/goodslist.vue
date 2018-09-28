<template>
  <div class="goods">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="关键字">
        <el-input v-model="formInline.user" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-select v-model="formInline.region" placeholder="请选择分类">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search"></el-button>
      </el-form-item>
    </el-form>

    <el-row class="button">
      <el-button type="primary">删除</el-button>
      <el-button type="primary">添加</el-button>
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
        prop="goodstype"
        label="商品分类"
        width="100">
      </el-table-column>
      <el-table-column
        prop="goodsname"
        label="商品名称">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="80">
      </el-table-column>
      <!-- <el-table-column
        prop="date"
        label="上传时间"
        width="100">
      </el-table-column> -->
      <el-table-column 
        prop="state"
        label="发布状态"
        width="100">
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

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="current_change"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total" >
      </el-pagination>
    </div>
        <el-dialog title="修改商品信息" :visible.sync="dialogFormVisible">
      <el-form >
          <el-form-item label="ID" :label-width="formLabelWidth" disabled="disabled">
          <el-input v-model="currentRow.id" autocomplete="off" readonly="readonly"></el-input>
          </el-form-item>
          <el-form-item label="商品分类" :label-width="formLabelWidth">
          <el-input v-model="currentRow.goodstype" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="currentRow.goodsname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="currentRow.price" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="发布状态" :label-width="formLabelWidth">
          <el-input v-model="currentRow.state" autocomplete="off"></el-input>
          </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
      getGoodslist() {
        this.$axios.get('/api/goodslist').then(res => {
          this.goodslist = res.data;
          this.total = this.goodslist.length;
          console.log(res)
        })
      },
      current_change(currentPage){
           this.currentPage = currentPage;
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      
      // 编辑当前行
      handleEdit(index, row) {
        console.log(index, row);
        this.dialogFormVisible = true;
        this.currentRow = row;
      },
      
      // 删除当前行
      handleDelete(index, row) {
        this.goodslist.splice(index,1)
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

      // 查找分类
      onSubmit() {
        console.log('submit!');
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
