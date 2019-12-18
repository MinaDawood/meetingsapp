import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBJipQEOtRhwCTqty6vFidsTORgtIw9GpI",
authDomain: "reactspas-99a4f.firebaseapp.com",
databaseURL: "https://reactspas-99a4f.firebaseio.com",
projectId: "reactspas-99a4f",
storageBucket: "reactspas-99a4f.appspot.com",
messagingSenderId: "153609366899",
appId: "1:153609366899:web:f64fe1db70914ed2d26906",
measurementId: "G-V5RLMJHMNE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;