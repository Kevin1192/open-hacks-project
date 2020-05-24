import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDdpK5T4fX7rkJC7zNK8QqbqCbC-wMLUzA",
  authDomain: "torch-967c4.firebaseapp.com",
  databaseURL: "https://torch-967c4.firebaseio.com",
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();