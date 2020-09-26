import Vue from 'vue'
import Map from '../components/Map.vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('http://metinseylan.com:1992')
}))

new Vue({
    render: h => h(Map)
}).$mount('#socketMap')