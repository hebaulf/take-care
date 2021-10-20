// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsCFrVuipvtOSjDqyvW2EAvod2Q-m2u-Q",
    authDomain: "take-care-b6d37.firebaseapp.com",
    projectId: "take-care-b6d37",
    storageBucket: "take-care-b6d37.appspot.com",
    messagingSenderId: "477227886508",
    appId: "1:477227886508:web:2a267f7bf3261ed04b3c09"
};

// Initialize Firebase
const firebase = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();