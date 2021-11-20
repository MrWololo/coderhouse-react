import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,

  apikey: "AIzaSyAkFqYz5ZbqQ0Mn9KRJIVinF6a1qYut_OM",
  authDomain: "coderhouse-react-54736.firebaseapp.com",
  projectId: "coderhouse-react-54736",
  storageBucket: "coderhouse-react-54736.appspot.com",
  messagingSenderId: 305921164904,
  appId: "1:305921164904:web:703da1f8b26129c5655ddd",
  measurmenetId: "G-N3MFCG7G9Y",

};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};
