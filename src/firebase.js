// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbph0KRomZrItTBOl7qi6ZCiU3oxvk858",
  authDomain: "career-firebase-app-f8c40.firebaseapp.com",
  projectId: "career-firebase-app-f8c40",
  storageBucket: "career-firebase-app-f8c40.appspot.com",
  messagingSenderId: "542379774517",
  appId: "1:542379774517:web:8d105c3893e115c09d577c"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db= firebaseApp.firestore()
const auth=firebase.auth()
export {db,auth}
