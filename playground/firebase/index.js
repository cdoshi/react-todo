import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAOBtXrkpdtOIignUc-Pe2DxCPKEh33olA",
    authDomain: "chiran-todo-app.firebaseapp.com",
    databaseURL: "https://chiran-todo-app.firebaseio.com",
    projectId: "chiran-todo-app",
    storageBucket: "chiran-todo-app.appspot.com",
    messagingSenderId: "131186155799"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Chiran',
    age: 25
  }
});

var todosRef = firebaseRef.child('todosRef');

todosRef.on('child_added', (snapshot) => {
  console.log('Todos added', snapshot.key, snapshot.val());
});

var newTodo1 = todosRef.push({
  text: 'Walk the dog!'
});

var newTodo2 = todosRef.push({
  text: 'Clean the yard!'
});


// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('Child added', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed', (snapshot) => {
//   console.log('Child changed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot) => {
//   console.log('Child removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'walk the dog!'
// });
//
// console.log('Todo id', newNoteRef.key);
