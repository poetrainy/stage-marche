import firebase from 'firebase/compat/app';
// import 'Firebase/compat/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getApp, getApps, initializeApp } from 'firebase/app';

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
};

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  databaseURL: `https://${
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || ''
  }.firebaseio.com`,
};

// if a Firebase instance doesn't exist, create one
if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseCredentials);
}

const auth = firebase.auth();

const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export { firebase, auth, firebaseApp };
