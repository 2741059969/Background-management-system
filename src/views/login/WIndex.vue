<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"> </el-col>
      <el-col :span="12" :xs="24" class="col-form">
        <el-form :model="form" label-width="80px" class="login_form" :rules="rules">
          <h1>Hi</h1>
          <h2>欢迎来到后台管理系统</h2>
          <el-form-item label="账号" prop="username">
            <el-input v-model="form.username" placeholder="请输入账号" :prefix-icon="User" :style="{ width: '80%' }" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" show-password placeholder="请输入密码" :prefix-icon="Lock" :style="{ width: '80%' }" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" class="login_btn">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import request from '@/utils/request'
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import type { login_response } from '@/type/userabout'
// import { ElMessage } from 'element-plus'
// do not use same name with ref
const form = reactive({
  username: '',
  password: ''
})
//表单规则验证
let validateusername = (rules, value: string, callback) => {
  if (value.length < 3) {
    callback(new Error('用户名不得小于3个字符'))
  } else if (value.length > 10) {
    callback(new Error('用户名不得超过10个字符'))
  }
}
let validatepassword = (rules, value: string, callback: Function) => {
  if (value.length < 3) {
    callback(new Error('密码不得小于3个字符'))
  } else if (value.length > 10) {
    callback(new Error('密码不得超过10个字符'))
  }
}
const rules = {
  username: [{ required: true, trigger: 'change', validator: validateusername }],
  password: [{ required: true, trigger: 'change', validator: validatepassword }]
}

const router = useRouter()
const onSubmit = async () => {
  console.log('点击了登录按钮')

  let result: login_response = await request.post('http://localhost/login', {
    username: form.username,
    password: form.password
  })

  if (result.code === 200) {
    router.push('/home')
    ElMessage({
      type: 'success',
      message: '登录成功'
    })
  } else {
    ElMessage({
      type: 'error',
      message: '登录失败'
    })
  }
}
</script>

<style scoped lang="less">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    padding: 40px;
    background: url('@/assets/login_form.png') no-repeat;
    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 80%;
    }
  }
}
</style>
