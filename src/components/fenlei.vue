<template>
  <div  class="fenlei">
  <el-row class="add">
    <el-button type="primary">添加</el-button>
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
      property="class"
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
        tableData: [{
          id: '001',
          class: '美食',
        },{
          id: '002',
          class: '美食',
        },{
          id: '003',
          class: '美食',
        }],
        currentPage: 1,
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.tableData.splice(index,1)
      },
      addRow() {

      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style>
  .fenlei{text-align: left;}
  .add{margin:10px 0;padding-bottom:20px;border-bottom:1px solid #eee;}
</style>
