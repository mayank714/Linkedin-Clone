import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAqVvJoM51Q6ta0A0HD3DBAtLfOC65vd4A",
    authDomain: "linkedin-clone-a71f9.firebaseapp.com",
    projectId: "linkedin-clone-a71f9",
    storageBucket: "linkedin-clone-a71f9.appspot.com",
    messagingSenderId: "84091455058",
    appId: "1:84091455058:web:a9ad5b27405e3837fec18b",
    measurementId: "G-0Y90YFCF0M"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();

  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  const storage= firebase.storage();

  export {auth,provider,storage };
  export default db;