import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAOBtXrkpdtOIignUc-Pe2DxCPKEh33olA",
      authDomain: "chiran-todo-app.firebaseapp.com",
      databaseURL: "https://chiran-todo-app.firebaseio.com",
      projectId: "chiran-todo-app",
      storageBucket: "chiran-todo-app.appspot.com",
      messagingSenderId: "131186155799"
  };
  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
