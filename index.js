const firebase = require('firebase');
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDnSl97eHT_stdUKfMh2p8s0rawYYKSYQA",
  authDomain: "nodejs-vue-firebase-fullstack.firebaseapp.com",
  databaseURL: "https://nodejs-vue-firebase-fullstack.firebaseio.com",
  projectId: "nodejs-vue-firebase-fullstack",
  storageBucket: "nodejs-vue-firebase-fullstack.appspot.com",
  messagingSenderId: "565895488336",
  appId: "1:565895488336:web:9ba3b58c2780061d298255"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




var db = firebase.firestore();

/*
db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});

console.log('allo');*/


db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});

