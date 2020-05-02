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
                <v-form>
                  <v-text-field label="userName" name="userName" type="text" @change="setUserName" />
                  <v-text-field id="password" label="password" name="password" type="password" @change="setUserPassword" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-row align="center">
                    <div class="mx-2 my-1">
                        <v-btn color="primary" v-on:click="setToken(token)">Login</v-btn>
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
import { mapActions } from 'vuex'
import axios from 'axios';

export default {
  name: "Login",
  components: {
  },
  methods: {
    //call actions from the store
    ...mapActions({
      setUserName: 'user/setUserName',
      setUserPassword: 'user/setUserPassword',
      setToken: 'token/setToken'
    })
  },
  props: {
    source: String
  },
  //token var is created in data
  data(){
    return{
      token: null
    }
  },
  //we get the token from a json and set the feedback to the token var through response
  mounted(){
    axios
    //token.json must be in public folder to work properly
    .get('../token.json')
    .then(response => (this.token = response))
    //console log, must be deleted after test purposes
    /*.then(function(token){
       console.log(token)
    })*/
  },
  created(){
    console.log("Token from store");
    console.log(this.$store.state.token);
  }
};
</script>