<template>
<div>
    <Header />
    <Navbar />
    <v-container fluid>
        <v-layout column>
            <v-card>
                <v-card-text>
                    <v-text-field
                        v-model="form.userName"
                        label="Name"
                        :disabled="true"></v-text-field>
                    <v-text-field
                        v-model="form.email"
                        label="Email Address"
                        :disabled="true"></v-text-field>
                </v-card-text>
            </v-card>
        </v-layout>
    </v-container>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
    export default {
        name: 'Profile',
        components: { 
            Header,
            Navbar 
            },
        data () {
            return {
                loading: false,
                form: {
                    userName: 'testName',
                    email: 'mail@mail.com'
                },

            }
        }
    }
</script>