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
                        <v-btn color="primary">Login</v-btn>
                    </div>
                    <div class="mx-1 my-1">
                        <v-btn color="primary">Create account</v-btn>
                    </div>
                    <div class="mx-2 my-1">
                        <v-btn color="primary">Recover account</v-btn>
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

export default {
  name: "Login",
  components: {
  },
  methods: {
    ...mapActions({
      setUserName: 'user/setUserName',
      setUserPassword: 'user/setUserPassword',
    })
  },
  props: {
    source: String
  }
};
</script>