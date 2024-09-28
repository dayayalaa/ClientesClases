import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCzm2vfB2G_ahXL2bY9rUJpyDcV0XLHBeE",
    authDomain: "cwm-2024-2-m-p-8099f.firebaseapp.com",
    projectId: "cwm-2024-2-m-p-8099f",
    storageBucket: "cwm-2024-2-m-p-8099f.appspot.com",
    messagingSenderId: "310705465520",
    appId: "1:310705465520:web:b6fe9b4b8743cae2a17375",
    measurementId: "G-TS7S9XZ7P0"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

export const auth = getAuth(app);