import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "ar-web-fc1ef.firebaseapp.com",
    databaseURL: "https://ar-web-fc1ef.firebaseio.com",
    projectId: "ar-web-fc1ef",
    storageBucket: "ar-web-fc1ef.appspot.com",
    messagingSenderId: "25550135212",
    appId: "1:25550135212:web:91e707f7f53e522817e409",
    measurementId: "G-CXLXCZNQYG"
}

firebase.initializeApp(config)


export const db = firebase.firestore()

export default firebase
