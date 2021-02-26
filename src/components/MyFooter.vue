<template>
  <v-footer fixed dark padless>
    <v-card flat tile class="py-0 mx-auto indigo white--text text-center col-11" style="height:100px">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class=" mx-6 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        CopyRight (c) {{ new Date().getFullYear() }}  By Fierce —
        <strong>Materia Design</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
  })
}
</script>
