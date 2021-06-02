import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutoSize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutoSize);

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyCFgUvebChU_rvaoOw-8FRkqOipyv99p88",
    authDomain: "calendar-ac8f9.firebaseapp.com",
    projectId: "calendar-ac8f9",
    storageBucket: "calendar-ac8f9.appspot.com",
    messagingSenderId: "331071984506",
    appId: "1:331071984506:web:18f7ea8bfed0ecf73e7cc3",
    measurementId: "G-FBP49BFXPP"
})

export const db = firebase.firestore();

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')