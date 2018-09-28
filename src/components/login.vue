<template>
    <div class="content">

        <div class="logo">

            <img src="../assets/fankelogo.jpg" height="130" width="450" alt="" />
        </div>
        <h2>凡客后台管理系统</h2>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="pass">
                <el-input type="text" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>

                <el-form-item>
                 <el-checkbox-group @moudel="ruleForm2.type">
                  <el-checkbox label="记住密码" name="type"></el-checkbox>
                  <!-- <el-checkbox label="地推活动" name="type"></el-checkbox> -->
                </el-checkbox-group>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
     
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
            pass: '',
            checkPass: '',
            type: ['2'],
        
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          this.$axios({
              url:'/api/login',
              method:'post',
              data:(()=>{
                    let data = '';
                    for(let key in this.ruleForm2){
                        data += key + '=' + this.ruleForm2[key] + '&'
                    }
                    data = data.slice(0);
                    console.log(data)
                    return data;
                })(),
          }).then(res=>{
              console.log(res.data)
              if(res.data === '登录成功'){
                  sessionStorage.setItem('token',res.data);
                  // console.log(this.ruleForm2.pass,this.ruleForm2.checkPass)
                  this.$router.push({
                    name:'home',
                    params:{
                      name:this.ruleForm2.pass,
                      pass:this.ruleForm2.checkPass
                    }

                  })
             
                  

              }else{        
                    this.$message('密码或用户名失败');
                    // console.log(this.$router);

              }
          })
         
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style type="text/css">
    .content{
        width:600px;
       /* height: 400px;*/
        position: absolute;
        border:1px solid #ccc;
        padding:20px;
        padding-left: 0;
        left: 50%;
        top:50%;
        transform:translate(-50%, -50%);
    }
    h2,.logo{
      text-align: center;
    }
    .el-input{
      width:80%;
    }
      
</style>