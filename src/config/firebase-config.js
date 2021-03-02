import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAOJRaxF3xBfHAhcTFvCCqdhiID6T74Sk8",
  authDomain: "little-tags-5ff8e.firebaseapp.com",
  projectId: "little-tags-5ff8e",
  storageBucket: "little-tags-5ff8e.appspot.com",
  messagingSenderId: "828940268979",
  appId: "1:828940268979:web:c64fe971acb414a9a247c6",
  measurementId: "G-EJXMSRHZJB",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
