// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC19LvmSLEhHI-V73gk6yOvHW9bo6WApMQ",
    authDomain: "take-care-webapp.firebaseapp.com",
    projectId: "take-care-webapp",
    storageBucket: "take-care-webapp.appspot.com",
    messagingSenderId: "374629742103",
    appId: "1:374629742103:web:f3921f24b6514c07da0e52"
};

// Initialize Firebase
const firebase = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();