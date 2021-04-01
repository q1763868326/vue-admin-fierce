<template>
  <v-card class="mx-auto" height="100%" width="100%">
    <v-navigation-drawer class="indigo" app dark permanent>
      <v-list flat>
        <v-list-item-group mandatory color="black" active-class="yellow lighten-1 pink--text text--darken-3">
          <div v-for="route in routers" :key="route.title">
            <v-list-item :ripple="{ class: `${color}--text` }" link @click="goTo(route.path)">
              <v-list-item-icon>
                <v-icon>{{ route.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ route.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider />
          </div>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="">
          <v-list-item style="background-color:#272727;" link @click="Logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>LOGOUT</v-list-item-content>
          </v-list-item>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { removeToken } from '@/utils/auth'

export default {
  name: 'Sidebar',
  data() {
    return {
      color: 'indigo',
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard' },
        { title: 'Account', icon: 'mdi-account-box', path: '/home' },
        { title: 'Admin', icon: 'mdi-gavel', path: '/' }
      ]
    }
  },
  computed: {
    routers() {
      const items = this.$router.options.routes[0].children
      const list = []
      items.forEach(item => {
        if (item.meta.display == null) {
          const temp = {
            title: item.name,
            icon: item.meta.icon || 'mdi-home',
            path: item.path
          }
          list.push(temp)
        }
      })
      return list
    }
  },
  mounted() {
    this.$router.push('/dashboard')
  },
  methods: {
    Logout() {
      removeToken()
      this.$router.push('/login')
    },
    goTo(path) {
      try {
        this.$router.push(path)
      } catch (err) {
        console.log('cant not to go')
      }
    }
  }
}
</script>

<style>
.active {
  background-color: yellow;
}
</style>
