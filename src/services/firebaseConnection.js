import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyBh96k0VbfHjXETZvZ6LlusdCSP7ir4Zxw",
  authDomain: "brunnosillvar.firebaseapp.com",
  projectId: "brunnosillvar",
  storageBucket: "brunnosillvar.appspot.com",
  messagingSenderId: "476378840973",
  appId: "1:476378840973:web:b58805aa98dbaaad5707c4",
  measurementId: "G-54XDEVCLKH"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;