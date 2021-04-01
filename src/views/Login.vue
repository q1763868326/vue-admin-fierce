<template>
  <div style="width:100%;height:100%;" class="login-background">
    <v-app-bar color="yellow lighten-1 dense">
      <v-toolbar-title class="pink--text text--darken-3 text-overline">FI.VERSION</v-toolbar-title>
    </v-app-bar>
    <v-row style="margin-top:55px" justify="center" align="center">
      <v-card class="blue lighten-3 mx-auto col-6" elevation="10">
        <v-card-title class="justify-center mt-4">
          <strong>Login Page</strong>
        </v-card-title>
        <v-form ref="form" class="my-4 mx-auto" lazy-validation>
          <v-text-field v-model="username" class="mx-auto col-11" label="Username" require />
          <v-text-field
            v-model="password"
            class="my-4 mx-auto col-11"
            :type="show1 ? 'text' : 'password'"
            label="Password"
            require
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
            @keyup.enter="Login"
          />
          <v-checkbox v-model="rememberMe" class="ml-10" label="Remember Me ?" />
        </v-form>
        <v-row justify="end" class="my-1">
          <v-btn class="green--text text--darken-3 text-overline" text @click="Login">
            login
          </v-btn>
          <v-btn class="blue-gray--text text--darken-3 text-overline" text>
            Register
          </v-btn>
        </v-row>
      </v-card>
    </v-row>
    <MyFooter />
  </div>
</template>

<script>
import MyFooter from '@/views/components/MyFooter'
import { login } from '@/api/userAuth'
import { Message } from 'element-ui'

export default {
  components: { MyFooter },
  data() {
    return {
      username: '',
      password: '',
      email: '',
      rememberMe: false,
      show1: false
    }
  },
  methods: {
    async Login() {
      const data = {
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe
      }
      login(data)
        .then(res => {
          this.$store.commit('setToken', res.data)
          // request.get('/auth/info').then(res2 => {
          //   this.$store.commit('setUserInfo', res2.data)
          //   this.$router.push('/')
          // })
          this.$router.push('/')
        })
        .catch(err => {
          Message({ message: err.message, type: 'error', duration: 5 * 1000 })
        })
    }
  }
}
</script>

<style>
.login-background {
  background: url('~@/assets/bg.png');
}
</style>
