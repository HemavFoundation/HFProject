<template>
  <v-card height="100">
    <v-footer
      absolute
      class="primary"
      app
    >
      <v-col
        class="text-center pa-1"
        cols="12"
      >
        <v-img
          :src="require('../assets/logo-blanco.png')"
          position="right"
          contain
          height="50"
        />
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: "Footer",

  props: {
    source: String
  },

  data: () => ({
    //
  })
};
</script>