import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCBVoFPZmon9D4zJgjVCTf-W_c5QED0DgA',
  authDomain: 'crwn-db-199de.firebaseapp.com',
  databaseURL: 'https://crwn-db-199de.firebaseio.com',
  projectId: 'crwn-db-199de',
  storageBucket: 'crwn-db-199de.appspot.com',
  messagingSenderId: '348409862839',
  appId: '1:348409862839:web:dc3f7983ece5602fad0b32',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
