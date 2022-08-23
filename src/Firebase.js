// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOiTYsbrZ5k_b_g2e5sC4aPOD2n5hTvqo",
    authDomain: "facebook-6ff13.firebaseapp.com",
    projectId: "facebook-6ff13",
    storageBucket: "facebook-6ff13.appspot.com",
    messagingSenderId: "244489555736",
    appId: "1:244489555736:web:b1292531f02cd8825d186d",
    measurementId: "G-MJCG7Z7J3L"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
   const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
  
 

  
  

  