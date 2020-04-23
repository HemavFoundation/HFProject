<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Recover account</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Write the email of the account you want to recover"
                  name="email"
                  type="text"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-row align="center">
                  <!-- @click.stop allows us to show the dialog when clicked -->
                <v-btn color="primary" @click.stop="dialog = true">Recover account</v-btn>
                <!-- Popup information-->
                <v-dialog v-model="dialog" max-width="400">
                  <v-card>
                    <v-card-title class="headline">Password has been sent</v-card-title>
                    <v-card-text>If this email is in our database, a recovery link will be sent.</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialog = false">Accept</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "RecoverAccount",
  //dialog:false is needed for the recovery popup
  data () {
      return {
        dialog: false,
      }
    }
};
</script>