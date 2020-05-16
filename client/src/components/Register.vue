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
                  <v-text-field label="Write your username" name="userName" id="userName"  type="text" />
                  <v-text-field label="Write your email" name="email" id="email" type="text" />
                  <v-text-field label="Write your desired password" id="password" name="password" type="password"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-row align="center">
                    <v-btn color="primary" v-on:click="register()">Create account</v-btn>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
import axios from 'axios';
import router from '../router';
export default {
  name: "Register",
  methods: {    
            register: () => {    
                let email = document.getElementById("email").value;
                let displayName = document.getElementById("userName").value;
                let password = document.getElementById("password").value;
                let register = () => {
                    let data = {
                        email: email,
                        displayName: displayName,
                        password: password
                    }
                    axios.post("http://localhost:3001/api/signup", data)
                        .then((response) => {
                          console.log("Logueado correctamente")
                          router.push("/")
                        })
                }
                register()
            }
        }
    }
</script>