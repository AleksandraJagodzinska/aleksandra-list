import firebase from 'firebase'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6t5RmQNb3xZFNCvrkiaO7zXExkoXxTeQ",
    authDomain: "aleksandra-list.firebaseapp.com",
    databaseURL: "https://aleksandra-list.firebaseio.com",
    projectId: "aleksandra-list",
    storageBucket: "aleksandra-list.appspot.com",
    messagingSenderId: "307266614522"
};
firebase.initializeApp(config);

export const database = firebase.database();