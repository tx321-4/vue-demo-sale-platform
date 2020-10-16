<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input
            type="text"
            v-model="usernameModel"
            placeholder="请输入用户名"
          />
        </div>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input
            type="password"
            v-model="passwordModel"
            placeholder="请输入密码"
          />
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-b">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Login } from '@/api/login'

export default {
  name: 'logForm',
  data () {
    return {
      usernameModel: '',
      passwordModel: ''

    }
  },

  methods: {
    onLogin () {
      Login().then((res) => {
        this.$emit('has-log', res.data)
      }, (error) => {
        console.log(error)
      })
    }

  }
}
</script>

<style>
</style>
