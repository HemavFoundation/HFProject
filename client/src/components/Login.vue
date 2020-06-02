<template>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-col align="center">
          <h1 class="display-2 font-weight-bold mb-3">DOMA</h1>
          <p><b>D</b>rone <b>O</b>perations <b>M</b>anagment <b>A</b>pp</p>
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
                  <v-text-field id="password" label="password" name="password" type="password"/>
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
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
export default {
  name: "Login",
<<<<<<< Updated upstream
    data(){
    return{
      token: null
    }
  },
  computed: {
    ...mapGetters({
      userToken: 'user/getToken'
=======
  data() {
    return {
      token: null,
      name: null,
      surName: null,
      email: null,
      country: null
    };
  },
  computed: {
    ...mapGetters({
      userToken: "user/getToken",
      userEmail: "user/getEmail"
>>>>>>> Stashed changes
    })
  },
  methods: {
    //call actions from the store
    ...mapActions({
<<<<<<< Updated upstream
      setUserName: 'user/setUserName',
      setUserPassword: 'user/setUserPassword',
      setToken: 'user/setToken'
=======
      setUserName: "user/setUserName",
      setUserSurName: "user/setUserSurName",
      setUserPassword: "user/setUserPassword",
      setEmail: "user/setEmail",
      setToken: "user/setToken"
>>>>>>> Stashed changes
    }),
    login() {
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      const userData = {
        email: email,
        password: password
      }

      axios.post("http://localhost:3001/api/signin", userData)
        .then(response => {
<<<<<<< Updated upstream
          const token = response.data.token;   
          this.token = token
          this.setToken(token)
          console.log({token})
          if(token) {
            this.$router.push('/Status')
          }else{
            confirm("A tu casa");
=======
          console.log(response.data);
          const token = response.data.token;
          this.token = token;
          this.setToken(token);
          console.log({ token });
          const email = response.data.email;
          this.email = email;
          this.setEmail(email);
          console.log({ email });
          if (token) {
            this.$router.push("/Status");
          } else {
            confirm("Something went wrong, please try again");
>>>>>>> Stashed changes
          }
        });
      }
  },
  created(){
    console.log("Token from store");
    console.log(this.$store.state.user.token);
    console.log(this.$store.state.user.email);
  }
};
</script>