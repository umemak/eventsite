import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Amplify from 'aws-amplify';
// import aws_exports from './aws-exports';
// import {
//   applyPolyfills,
//   defineCustomElements,
// } from '@aws-amplify/ui-components/loader';

// Amplify.configure(aws_exports);
// applyPolyfills().then(() => {
//   defineCustomElements(window);
// });

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_ymH4gCwKWFUrMDsw5gGHDdugXH7znCQ",
  authDomain: "eventsite-1ad53.firebaseapp.com",
  projectId: "eventsite-1ad53",
  storageBucket: "eventsite-1ad53.appspot.com",
  messagingSenderId: "93158991616",
  appId: "1:93158991616:web:f2a7980d1fc324777635e5",
  measurementId: "G-ZPV8Y94WF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(store).use(router).mount('#app')
