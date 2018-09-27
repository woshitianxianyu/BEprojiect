<template>
    <div class="updatapass">
        <p>设置我的资料</p>
        <el-form ref="form" :model="form"  label-width="80px" >
            <el-form-item label="我的角色">
                <el-select v-model="form.region" placeholder="请选择角色">
                    <el-option
                        v-for="(item) in options"
                        :key="item.value"
                        :label="item.label"
                        :disabled="item.disabled">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="昵称" class="gender">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="性别" class="gender">
                <el-radio-group v-model="form.resource">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="头像">
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :limit="1"
                    :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <span slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</span>
                </el-upload>
            </el-form-item>

            <el-form-item label="手机">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item
                prop="email"
                label="邮箱"
                :rules="[
                { message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ]">
                <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>

            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
            </el-form-item>
        </el-form>
   </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },

        options: [
            {value: '01', label: '管理员',disabled: true}, 
            {value: '02', label: '超级管理员'}
        ],

        dynamicValidateForm: {
            domains: [{
                value: ''
            }],
            email: ''
        },

        fileList: [{
            name: '', 
            url: ''
        }],
      }
    },
    
    methods: {
        // 点击提交修改
      onSubmit() {
        console.log('submit!');
      },

        // 删除上传的文件
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },

        // 点击已上传的文件时
      handlePreview(file) {
        console.log(file);
      },
    }
  }
</script>

<style>
    p{font-size:14px;line-height: 14px;margin-bottom:15px;padding-bottom:15px;border-bottom:1px solid #eee;}
   .el-input{width: 300px;}
   .gender{margin:0;}
</style>