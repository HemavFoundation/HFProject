<template>
  <v-card color="grey lighten-4" flat tile clipped>
    <v-toolbar dense class="primary">
      <v-img
        :src="require('../assets/logo-blanco.png')"
        position="left"
        contain
        height="50"
      />
      <v-toolbar-title class="title"
        >Drone Operations Management Application</v-toolbar-title
      >
      <v-spacer></v-spacer>

      <v-toolbar-title
        >Hello {{ this.$store.state.user.userName }}</v-toolbar-title
      >
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <router-link to="profile">
              <v-list-item-title>User information</v-list-item-title>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link @click.native="logout" to="/">
              <v-list-item-title>Log out</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters({
      userToken: "user/getToken",
      userEmail: "user/getEmail",
      userName: "user/getUserName",
      userSurName: "user/getSurName",
      userCountry: "user/getCountry",
    }),
  },
  methods: {
    logout() {
      localStorage.clear()
    },
  },
};
</script>

<style scoped>
.v-toolbar__title {
  font-size: 15px;
  color: white;
}
.title {
  position: absolute;
  left: 160px;
  color: white;
}
</style>
