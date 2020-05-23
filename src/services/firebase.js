import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCNEJzWaM8XMuwhGBiEeyUMwaKkyo-cYmk",
  authDomain: "chat-e13c3.firebaseapp.com",
  databaseURL: "https://chat-e13c3.firebaseio.com",
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();