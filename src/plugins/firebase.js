import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCX9NvkkCleG7ocFB_lklsS6ZcZ2vD5JEM",
    authDomain: "my-portfolio-946c9.firebaseapp.com",
    databaseURL: "https://my-portfolio-946c9.firebaseio.com",
    projectId: "my-portfolio-946c9",
    storageBucket: "my-portfolio-946c9.appspot.com",
    messagingSenderId: "757610509584",
    appId: "1:757610509584:web:a1767556312f1e3318a195",
    measurementId: "G-2WMLZX3FHR"
};
firebase.initializeApp(config);
export const functions = firebase.functions();