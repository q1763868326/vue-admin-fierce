<template>
  <div>
    <v-navigation-drawer app permanent :mini-variant="mini">
      <side-bar />
    </v-navigation-drawer>
    <v-app-bar app dense dark class="mx-auto">
      <v-btn fab small class="indigo mr-4" @click="mini = !mini">
        <v-icon>
          mdi-menu
        </v-icon>
      </v-btn>
      <v-toolbar-title class="pink--text text--darken-3 text-overline">FI.VERSION</v-toolbar-title>
      <v-spacer />
      <v-row style="height:100%" class="mr-6">
        <avatars />
      </v-row>
    </v-app-bar>
    <v-container fluid class="mx-auto col-11 ">
      <router-view />
    </v-container>
    <v-footer fixed />
  </div>
</template>

<script>
import SideBar from '@/views/components/SideBar'
import Avatars from '@/views/components/Avatars.vue'
export default {
  components: { SideBar, Avatars },
  data() {
    return {
      mini: false
    }
  }
}
</script>

<style></style>
