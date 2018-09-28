<template>
    <div class="updatapass">
        <p>修改密码</p>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="当前密码" prop="password">
                <el-input type="password" v-model="Pass">{{Pass}}</el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                <span>&nbsp;6-16个字符</span>
            </el-form-item>
            <el-form-item label="确认新密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
            </el-form-item>
        </el-form>
   </div>
</template>

<script>
  export default {
    props:['name','pass'],
    data() {
      console.log(this.name,this.pass)
      var oldPass = (rule, value, callback) => {
        if (value !== this.ruleForm.oldPass) {
          callback(new Error('密码输入有误'));
        } else {
            callback();
        }
      };
      
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };

      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          oldPass: ''
        },
        user:{},
        username:this.name,
        Pass:this.pass,
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          oldPass: [
            { validator: oldPass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            this.$axios({
            method:'post',
            url:'/api/personData',
            data: (()=>{
                      let data = '';
                      for(let key in this.ruleForm){
                          data += key + '=' + this.ruleForm[key] + '&'
                      }
                      data = data.slice(0)+'name='+this.name;
                      // date += 'name=+"'+this.name+'"';
                      console.log(data)
                      return data;
                  })(),
          }).then(res => {
          
        })


          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created(){
        console.log(this.name)
        this.$axios.get('/api/user?name='+this.name).then(res=>{
            var data = res.data;
            this.user = data[0];

            console.log(res.data[0])
        })
    }
  }
</script>
<style>
    p{font-size:14px;line-height: 14px;margin-bottom:15px;padding-bottom:15px;border-bottom:1px solid #eee;}
   .el-input{width: 300px;}
</style>

