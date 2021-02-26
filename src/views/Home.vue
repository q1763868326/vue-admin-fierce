<template>
  <div class="home">
    <el-button type="primary" @click="send">请求</el-button>
    <div class="content"></div>
    <div class="">124</div>
  </div>
</template>

<script>
import request from '@/utils/request'
import qs from 'qs'
import { Message } from 'element-ui'

export default {
  name: 'Home',
  data() {
    return {
      username: 'demoData',
      password: 'demoData1',
      rememberMe: true
    }
  },
  mounted() {},
  methods: {
    send() {
      console.log(this.username)
      const data = {
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe
      }
      request({
        url: '/auth/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(data)
      }).catch(err => {
        console.log(err)
        Message({ message: err.message, type: 'error', duration: 5 * 1000 })
      })
    }
  }
}
</script>
<style scoped>
.content {
  width: 800px;
  height: 500px;
  background-color: red;
}
</style>
