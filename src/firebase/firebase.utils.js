import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6VesCQjRuCgOif7y7DQw6XsYp9cPD6p0",
    authDomain: "sphene-e5361.firebaseapp.com",
    databaseURL: "https://sphene-e5361.firebaseio.com",
    projectId: "sphene-e5361",
    storageBucket: "sphene-e5361.appspot.com",
    messagingSenderId: "124702255591",
    appId: "1:124702255591:web:eacf7ada4763ad74bf3542"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  





