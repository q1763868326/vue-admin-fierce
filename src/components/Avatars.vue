<template>
  <v-container>
    <v-row justify="end" align="center">
      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon middle v-on="on">
            <v-avatar color="pink darken-3" size="48">
              <span class="white--text headline">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="pink darken-3">
                <span class="white--text headline">{{ user.initials }}</span>
              </v-avatar>
              <h3 class="blue--text text--lighten-3">{{ user.fullName }}</h3>
              <p class="caption mt-1 ">
                {{ user.email }}
              </p>
              <v-divider class="my-3" />
              <v-btn depressed rounded text>
                Edit Account
              </v-btn>
              <v-divider class="my-3" />
              <v-btn class="red--text text--accent-4" depressed rounded text @click="Logout">
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
import { removeToken } from '@/utils/auth'
export default {
  data: () => ({
    user: {
      initials: 'FI',
      fullName: 'Fierce Zhu',
      email: '1763868326@qq.com'
    }
  }),
  methods: {
    Logout() {
      console.log('Logout')
      removeToken()
      this.$router.push('login')
    }
  }
}
</script>

<style></style>
