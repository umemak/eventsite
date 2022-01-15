
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD_ymH4gCwKWFUrMDsw5gGHDdugXH7znCQ",
  authDomain: "eventsite-1ad53.firebaseapp.com",
  projectId: "eventsite-1ad53",
  storageBucket: "eventsite-1ad53.appspot.com",
  messagingSenderId: "93158991616",
  appId: "1:93158991616:web:f2a7980d1fc324777635e5",
  measurementId: "G-ZPV8Y94WF1"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
