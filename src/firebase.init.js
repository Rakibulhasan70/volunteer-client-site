// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTvYMoFfkAk2y6aispWLbeoW69-0Va3to",
    authDomain: "voluenter-project.firebaseapp.com",
    projectId: "voluenter-project",
    storageBucket: "voluenter-project.appspot.com",
    messagingSenderId: "1026390842477",
    appId: "1:1026390842477:web:e5d8117a6a7c1d24773364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth