import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7H8Imtm0VaKqcICRWzQ8YE0-W5zWwKAg",
    authDomain: "health-tracker-e7bd6.firebaseapp.com",
    projectId: "health-tracker-e7bd6",
    storageBucket: "health-tracker-e7bd6.firebasestorage.app",
    messagingSenderId: "587732300187",
    appId: "1:587732300187:web:2f65fd6d72a53bdab9b13e",
    measurementId: "G-SL4T1PZ0K3"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
