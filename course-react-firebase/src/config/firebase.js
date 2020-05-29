import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyAfAINojVz0w-d0cwuRFPdeAK6Yqpa0myk",
	authDomain: "eventos-b5618.firebaseapp.com",
	databaseURL: "https://eventos-b5618.firebaseio.com",
	projectId: "eventos-b5618",
	storageBucket: "eventos-b5618.appspot.com",
	messagingSenderId: "929040554995",
	appId: "1:929040554995:web:faec8bb807c8938c051086"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);