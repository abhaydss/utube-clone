import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfViWUBUiD12jmjqSE76SQ8PRv_lqDz9U",
  authDomain: "mk-utube.firebaseapp.com",
  projectId: "mk-utube",
  storageBucket: "mk-utube.appspot.com",
  messagingSenderId: "476759063375",
  appId: "1:476759063375:web:647cb27c80f5f88471633a",
  measurementId: "G-RD5CSTY013",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
