import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
// //child_removed
// db.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// db.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// db.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// db.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// }).catch((e)=> {
//   console.log('Failed to fetch data', e)
// });

// db.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// }, (e) => {
//   console.log('Error fetching data', e);
// });

// setTimeout(() => {
//   db.ref(`expenses/-LQcvraUMDq0WtPWyhMc/amount`).set(500);
// }, 3000);

// db.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 500,
//   createdAt: 1000
// });

// db.ref('expenses').push({
//   description: 'Grocery',
//   note: '',
//   amount: 1500,
//   createdAt: 2000
// });

// db.ref('expenses').push({
//   description: 'Gas Bill',
//   note: '',
//   amount: 800,
//   createdAt: 3000
// });

// db.ref('notes/-LQcu42Ua-18p66CREwc').remove();
// db.ref('notes').push({
//   title: 'Second Note',
//   body: 'My second note'
// });

// const firebaseNotes = {
//   notes: {
//     ljhgfhfdks: {
//       title: 'First Note',
//       body: 'My first note'
//     }, 
//     ddsdfsdsffdfds: {
//       title: 'Second Note',
//       body: 'My second note'
//     }
//   }
// };


// const notes = [{
//   id: '12',
//   title: 'First Note',
//   body: 'My first note'
// }, {
//   id: '19',
//   title: 'Second Note',
//   body: 'My second note'
// }];

// db.ref('notes').set(notes);

// const onValueChange = db.ref().on('value', (snapshot) => {
//   const val =snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// }, (e) => {
//   console.log('Error fetching data', e);
// });

// setTimeout(() => {
//   db.ref('job/title').set('Manager');
// }, 3500);

// const onValueChange = (snapshot) => console.log(snapshot.val());
// db.ref().on('value', onValueChange);

// const onValueChange = db.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e)=> {
//   console.log('Error fetching data', e);
// });

// setTimeout(() => {
//   db.ref('age').set(37);
// }, 3500);

// setTimeout(() => {
//   db.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   db.ref('age').set(38);
// }, 10500);


// db.ref('location/city').once('value').then((snapshot)=>  {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
//   console.log('Error fetching data', e)
// });

// db.ref().set({
//   name: 'Kevin Wong',
//   age: 36,
//   stressLevel: 6,
//   isSingle: false,
//   job: {
//     title: 'Programmer',
//     country: 'Malaysia'
//   },
//   location: {
//     city: 'Kuala Lumpur',
//     country: 'Malaysia'
//   }
// }).then(() => {
//   console.log('Data is saved!!!');
// }).catch((error) => {
//   console.log(error);
// });

// db.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// db.ref('attributes').set({
//   height: 170,
//   weight: 65
// }).then(() => {
//   console.log('Attributes saved');
// }).catch((e) => {
//   console.log('Things not working', e);
// });

// db.ref().remove().then(()=> {
//   console.log("Remove succeeded.");
// }).catch((e) => {
//   console.log("Remove failed: " + e.message);
// });