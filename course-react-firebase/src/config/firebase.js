import firebase from "firebase";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXX",
  authDomain: "XXXXXXXXXX",
  databaseURL: "XXXXXXXXXXX",
  projectId: "eventos-b5618",
  storageBucket: "eventos-b5618.appspot.com",
  messagingSenderId: "XXXXXXXXXXX",
  appId: "XXXXXXXXXX",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
