<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-col align="center">
        <h1 class="display-2 font-weight-bold mb-3">DOMA</h1>
        <p>
          <b>D</b>rone
          <b>O</b>perations
          <b>M</b>anagment
          <b>A</b>pp
        </p>
      </v-col>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form v-on:submit="login">
                <v-text-field label="email" name="email" id="email" type="text" />
                <v-text-field id="password" label="password" name="password" type="password" />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-row align="center">
                <div class="mx-2 my-1">
                  <!-- <router-link to="Status"> -->
                  <v-btn color="primary" v-on:click="login()">Login</v-btn>
                  <!-- </router-link> -->
                </div>
                <div class="mx-1 my-1">
                  <router-link to="Register">
                    <v-btn color="primary">Create account</v-btn>
                  </router-link>
                </div>
                <div class="mx-2 my-1">
                  <router-link to="RecoverAccount">
                    <v-btn color="primary">Recover account</v-btn>
                  </router-link>
                </div>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      token: null,
      //userName: null,
      surName: null,
      email: null,
      country: null,
    };
  },
  computed: {
    ...mapGetters({
      userToken: "user/getToken",
      userEmail: "user/getEmail",
      userName: "user/getUserName",
      userSurName: "user/getSurName",
      userCountry: "user/getCountry",
      password: "user/getUserPassword",
    }),
  },
  methods: {
    //call actions from the store
    ...mapActions({
      setUserName: "user/setUserName",
      setUserSurName: "user/setUserSurName",
      setUserPassword: "user/setUserPassword",
      setEmail: "user/setEmail",
      setToken: "user/setToken",
      setCountry: "user/setCountry",
      setUserNameId: "user/setUserNameId",
      setUserDBId: "user/setUserDBId",
    }),
    login() {
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      const userData = {
        email: email,
        password: password,
      };
      axios
        .post(process.env.VUE_APP_API+"/api/signin", userData)
        .then((response) => {
          //Declaring all data from user that will be stored on the app
          console.log(response.data);
          var token = response.data.token;
          var email = response.data.email;
          var userName = response.data.userName;
          var surName = response.data.surName;
          var country = response.data.country;
          var userNameId = response.data.userNameId;
          var userDBId = response.data.userDBId;
          var password = response.data.password;
          //Saving the data into the vuex store
          this.token = token;
          this.setToken(token);
          this.email = email;
          this.setEmail(email);
          this.userName = userName;
          this.setUserName(userName);
          this.password = password;
          this.setUserPassword(password);
          this.surName = surName;
          this.setUserSurName(surName);
          this.country = country;
          this.setCountry(country);
          this.userNameId = userNameId;
          this.setUserNameId(userNameId);
          this.userDBId = userDBId;
          this.setUserDBId(userDBId);
          if (token) {
            this.$router.push("/Status");
          } else {
            confirm("Something went wrong, please try again");
          }
        });
    },
  },
};
</script>