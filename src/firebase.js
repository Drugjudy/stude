import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBkMGra7oeHygBHq3G4wPRmmNNXJH2Z6Fg",
  authDomain: "react-stude.firebaseapp.com",
  projectId: "react-stude",
  storageBucket: "react-stude.appspot.com",
  messagingSenderId: "586081083422",
  appId: "1:586081083422:web:26a1215e7406b6b70cce0f",
  measurementId: "G-9QMSQWQY9E"
  // ...
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);



