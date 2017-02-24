
import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
          apiKey: "AIzaSyCM1Dc8DNVwLaIlNYKAzFvb_lfEqyZN7Z0",
          authDomain: "vid-app-56014.firebaseapp.com",
          databaseURL: "https://vid-app-56014.firebaseio.com",
          storageBucket: "vid-app-56014.appspot.com",
        });
    }

}

module.exports = Firebase;
