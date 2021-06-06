import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC61-ynAT7q97YPiZbkLc_L5i_ovSiUyUI",
  authDomain: "school-attendance-ab11c.firebaseapp.com",
  databaseURL: "https://school-attendance-ab11c-default-rtdb.firebaseio.com",
  projectId: "school-attendance-ab11c",
  storageBucket: "school-attendance-ab11c.appspot.com",
  messagingSenderId: "632692612944",
  appId: "1:632692612944:web:41486583b28b990f1cd655"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase.database()
