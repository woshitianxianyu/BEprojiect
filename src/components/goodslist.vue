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
      :data="goodslist"
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
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100">
      </el-pagination>
    </div>

  </div> 
</template>

<script>
  export default { 
    data() {
      return {
        goodslist:[],

        formInline: {
            user: '',
            region: ''
        },
        currentPage: 1,

        // page:'',
        // qty:''
      }
    },

    methods: {
      getGoodslist() {
        this.$axios({
          method:'post',
          url:'http://10.3.137.11:8888/goodslist',
          // page:this.page,
          // qty:this.qty
        }).then(res => {
          this.goodslist = res.data;
          console.log(this.goodslist)
        })
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      
      // 编辑当前行
      handleEdit(index, row) {
        console.log(index, row);
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

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
