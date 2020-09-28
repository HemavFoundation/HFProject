<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Register</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form v-on:submit="register">
                <v-text-field label="Write your name" name="userName" id="userName" type="text" />
                <v-text-field label="Write your surname" name="surName" id="surName" type="text" />
                <v-text-field label="Write your email" name="email" id="email" type="text" />
                <v-text-field
                  label="Write your password"
                  id="password"
                  name="password"
                  type="password"
                />
                <v-text-field
                  label="Write your ID number"
                  name="userNameId"
                  id="userNameId"
                  type="text"
                />
                <v-select
                  :items="countryData"
                  v-model="country"
                  item-text="name"
                  item-value="code"
                  return-object
                  @change="selectedCountry"
                  label="Select your country"
                  type="text"
                />
                {{country.name}}
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-row align="center">
                <v-btn color="primary" v-on:click="register()">Create account</v-btn>
                <v-btn color="primary" class="droneListMarginLeft" v-on:click="back()">Back</v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
import router from "../router";
import countryData from "../assets/data/countries.json";
export default {
  name: "Register",
  methods: {
    back() {
      this.$router.go(-1);
    },
    register: () => {
      let email = document.getElementById("email").value;
      let userName = document.getElementById("userName").value;
      let surName = document.getElementById("surName").value;
      let userNameId = document.getElementById("userNameId").value;
      let password = document.getElementById("password").value;
      let country = document.getSelection;
      let register = () => {
        let data = {
          email: email,
          userName: userName,
          surName: surName,
          userNameId: userNameId,
          password: password,
          country: country
        };
        axios
          .post(process.env.VUE_APP_API+"/api/signup", data)
          .then(function(response) {
            console.log(response.data);
            router.push("/");
          });
      };
      register();
    }
  },
  data() {
    return {
      countryData: countryData,
      country: ""
    };
  }
};
</script>

<style scoped>
.droneListMarginLeft {
  margin-left: 20px;
}
</style>