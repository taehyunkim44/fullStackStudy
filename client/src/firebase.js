// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.React_APP_FireBaseApiKey,
  authDomain: process.env.React_APP_AuthDomain,
  projectId: process.env.React_APP_ProjectId,
  storageBucket: process.env.React_APP_StorageBucket,
  messagingSenderId: process.env.React_APP_MessagingSenderId,
  appId: process.env.React_APP_AppId,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
