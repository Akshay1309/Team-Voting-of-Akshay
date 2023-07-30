import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDHHc0kbcotEmQ3qM_vm1ANZzau5GHZQOU",
  authDomain: "pro-c67-2cb39.firebaseapp.com",
  projectId: "pro-c67-2cb39",
  storageBucket: "pro-c67-2cb39.appspot.com",
  messagingSenderId: "187367392776",
  appId: "1:187367392776:web:ed71a38e286410ee8db3bd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
