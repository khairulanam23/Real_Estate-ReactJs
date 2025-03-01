// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3-KyWspnTIMAVNnPhAP30jVl4Uw6eli8",
  authDomain: "b9a9-real-estate-dc08c.firebaseapp.com",
  projectId: "b9a9-real-estate-dc08c",
  storageBucket: "b9a9-real-estate-dc08c.appspot.com",
  messagingSenderId: "973650535418",
  appId: "1:973650535418:web:9f6cc27338e09be27f3a43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);