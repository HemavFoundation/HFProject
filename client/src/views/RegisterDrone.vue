<template>
  <v-content>
    <Header />
    <Navbar />
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Register a new drone</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form v-on:submit="registerDrone">
                <v-text-field label="ID Plate" name="idPlate" id="idPlate" type="text" />
                <v-text-field
                  label="Manufacturer"
                  name="manufacturer"
                  id="manufacturer"
                  type="text"
                />
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      label="Made date"
                      name="madeDate"
                      id="madeDate"
                      v-model="date"
                      readonly
                      v-on="on"
                    />
                  </template>

                  <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                </v-menu>
                <v-text-field label="Owner" id="owner" name="owner" type="text" />
                <v-text-field
                  label="Person in charge"
                  name="personInCharge"
                  id="personInCharge"
                  type="text"
                />
                <v-text-field
                  label="Pilots assigned"
                  name="pilotsAssigned"
                  id="pilotsAssigned"
                  type="text"
                />
                <v-select
                  v-model="e1"
                  :items="countries"
                  menu-props="auto"
                  label="Country"
                  name="country"
                  id="country"
                  hide-details
                  single-line
                ></v-select>
                <!-- <v-text-field label="Select your country" name="country" id="country"  type="text" />
                <v-text-field label="Select your user rol" name="userName" id="userName"  type="text" />-->
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-row align="center">
                <v-btn color="primary" class="droneListMarginLeft" v-on:click="registerDrone()">Save</v-btn>
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
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";

export default {
  name: "RegisterDrone",
  methods: {
    back() {
      this.$router.go(-1);
    },
    registerDrone() {
      let idPlate = document.getElementById("idPlate").value;
      let manufacturer = document.getElementById("manufacturer").value;
      let madeDate = document.getElementById("madeDate").value;
      let owner = document.getElementById("owner").value;
      let personInCharge = document.getElementById("personInCharge").value;
      let pilotsAssigned = document.getElementById("pilotsAssigned").value;
      let country = document.getElementById("country").value;
      let registerDrone = () => {
        let data = {
          idPlate: idPlate,
          manufacturer: manufacturer,
          madeDate: madeDate,
          owner: owner,
          personInCharge: personInCharge,
          pilotsAssigned: pilotsAssigned,
          country: country
        };
        axios
          .post("http://localhost:3001/api/saveDrone", data)
          .then(function(response) {
            console.log(response.data);
            router.push("/dronelist");
          });
      };
    }
  },
  components: {
    Navbar,
    Header
  },
  data() {
    return {
      e1: "Select a country",
      items: [
        { text: "Country 1" },
        { text: "Country 2" },
        { text: "Country 3" },
        { text: "Country 4" },
        { text: "Country 5" },
        { text: "Country 6" },
        { text: "Country 7" }
      ],
      countries: [
        "Afghanistan",
        "Åland Islands",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands",
        "Colombia",
        "Comoros",
        "Congo",
        "Congo, The Democratic Republic of the",
        "Cook Islands",
        "Costa Rica",
        "Cote D'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands (Malvinas)",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and Mcdonald Islands",
        "Holy See (Vatican City State)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran, Islamic Republic Of",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Democratic People's Republic of Korea",
        "Korea, Republic of",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libyan Arab Jamahiriya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Macedonia, The Former Yugoslav Republic of",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia, Federated States of",
        "Moldova, Republic of",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestinian Territory, Occupied",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Saint Helena",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "United States Minor Outlying Islands",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Viet Nam",
        "Virgin Islands, British",
        "Virgin Islands, U.S.",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    };
  }
};
</script>

<style scoped>
.droneListMarginLeft {
  margin-left: 20px;
}
</style>