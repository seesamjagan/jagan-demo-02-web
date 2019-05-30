// firebase app
import firebase from "firebase/app";

// firebase features
import "firebase/auth";
import "firebase/database";
import "firebase/messaging";
import "firebase/storage";
import "firebase/firestore";

// Instantiate a Firebase app.
const firebaseConfig = {
  apiKey: "AIzaSyBkqXOL0evTDYRizek8j8aqE_KkE9Izaw0",
  authDomain: "jagan-demo-02.firebaseapp.com",
  databaseURL: "https://jagan-demo-02.firebaseio.com",
  projectId: "jagan-demo-02",
  storageBucket: "jagan-demo-02.appspot.com",
  messagingSenderId: "980161509854",
  appId: "1:980161509854:web:f96fe50488482979"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

//let app = firebase.app();
export const features = ['auth', 'database', 'firestore', 'messaging', 'storage'].filter(feature => typeof firebaseApp[feature] === 'function');
