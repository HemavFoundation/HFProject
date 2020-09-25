<template>
  <div>
    <Header />
    <Navbar />
    <v-container id="user-profile" fluid tag="section">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Edit Profile</div>

            <div class="subtitle-1 font-weight-light">Complete your profile</div>
          </template>
        <v-alert type="success" :value="alert" v-model="alert">Information updated, please, log-in again</v-alert>
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="10">
                  <v-text-field label="Email" v-model="form.email" :disabled="true" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.userName"
                    label="Name"
                    class="purple-input"
                    name="userName"
                    id="userName"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.surName"
                    label="Surname"
                    class="purple-input"
                    name="surName"
                    id="surName"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.userNameId"
                    label="ID"
                    class="purple-input"
                    name="userNameId"
                    id="userNameId"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.password"
                    label="Change your password"
                    name="password"
                    id="password"
                    disabled
                    counter
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.country"
                    label="Country"
                    class="purple-input"
                    name="country"
                    id="country"
                  />
                </v-col>

                <v-col cols="12" class="text-right">
                  <v-btn color="primary" class="mr-0" v-on:click="updateInfo()">Update Profile</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>

        <v-col cols="12" md="4">
          <v-card>
            <v-img height="250" src="../../public/img/dronesflying.jpg"></v-img>
            <v-card-text class="text-center">
              <h4
                class="display-2 font-weight-light mb-3 black--text"
              >{{this.$store.state.user.userName}} {{this.$store.state.user.surName}}</h4>
              <p
                class="font-weight-light grey--text"
              >Citizen from {{this.$store.state.user.country}}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Profile",
  components: {
    Header,
    Navbar
  },
  data() {
    return {
      loading: false,
      alert: false,
      form: {
        userName: this.$store.state.user.userName,
        surName: this.$store.state.user.surName,
        userNameId: this.$store.state.user.userNameId,
        password: this.$store.state.user.password,
        country: this.$store.state.user.country,
        email: this.$store.state.user.email
      }
    };
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
      setUserPassword: "user/setUserPassword"
    }),
    updateInfo() {
      let userName = document.getElementById("userName").value;
      let surName = document.getElementById("surName").value;
      let userNameId = document.getElementById("userNameId").value;
      let country = document.getElementById("country").value;
      let password = document.getElementById("password").value;

      const userProfile = {
        password: password,
        userName: userName,
        surName: surName,
        userNameId: userNameId,
        country: country,
        userDBId: this.$store.state.user.userDBId
      };
      axios
        .create({
          baseURL: "http://localhost:8080",
          headers: {
            authorization: "Bearer " + this.$store.state.user.token
          }
        })
        .put("http://localhost:3001/api/updateUser/"+userProfile.userDBId, userProfile)
        .then(response => {
          //Declaring all data from user that will be stored on the app
          const userName = response.data.userName;
          const surName = response.data.surName;
          const country = response.data.country;
          const userNameId = response.data.userNameId;
          const password = response.data.password;
          const token = this.$store.state.user.token;
          //Saving the data into the vuex store
          this.password = password;
          this.setUserPassword(password);
          this.userName = userName;
          this.setUserName(userName);
          this.surName = surName;
          this.setUserSurName(surName);
          this.country = country;
          this.setCountry(country);
          this.userNameId = userNameId;
          this.setUserNameId(userNameId);
          //Activate the alert that everything went well
          this.alert=true
          //After x seconds re-login is required
          setTimeout(()=>{this.$router.push("/")}, 3000)
            
        });
    }
  }
};
</script>