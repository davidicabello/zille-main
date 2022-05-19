// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAY13IXWzL70QHp3IpjCNOY1dMVihB8f6I",
    authDomain: "zilleagro.firebaseapp.com",
    projectId: "zilleagro",
    storageBucket: "zilleagro.appspot.com",
    messagingSenderId: "854733938959",
    appId: "1:854733938959:web:27a3a2e317cb1ddfe3de7a",
    measurementId: "G-9TY8N2YCGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
