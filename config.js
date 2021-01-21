import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyABrRtLDV2WgjWNrIPCmrtzjD68q9WefNE",
    authDomain: "p-indic.firebaseapp.com",
    databaseURL: "https://p-indic-default-rtdb.firebaseio.com",
    projectId: "p-indic",
    storageBucket: "p-indic.appspot.com",
    messagingSenderId: "24851866587",
    appId: "1:24851866587:web:773609eac2521c1738bdfe"
};
let app = Firebase.initializeApp(config);
export const db = app.database();