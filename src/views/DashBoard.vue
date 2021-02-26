<template>
  <v-card elevation="8">
    <v-card-title><strong>Dashboard</strong></v-card-title>
    <v-row class="col-12">
      <v-img v-for="(item, index) in imgs" :key="index" :src="item.src" />
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      imgs: [{ src: require('../assets/bg.png') }, { src: require('../assets/bg.png') }]
    }
  }
}
</script>

<style></style>
