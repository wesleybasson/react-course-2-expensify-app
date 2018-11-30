import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBraAPowZA9LGaE4Jfiy4mDa1yL1O5jWh0",
    authDomain: "expensify-wmb.firebaseapp.com",
    databaseURL: "https://expensify-wmb.firebaseio.com",
    projectId: "expensify-wmb",
    storageBucket: "expensify-wmb.appspot.com",
    messagingSenderId: "654187460391"
};

firebase.initializeApp(config);

const database = firebase.database();

//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     })
//     .catch((e) => {
//         console.log('An error occured: ', e);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     }, (e) => {
//         console.log('An error occured: ', e);
//     });

// database.ref('expenses').push({
//     description: 'Bond',
//     note: '',
//     amount: 55000,
//     createdAt: 0
// });

// database.ref('notes/-LS-9Sh0cOgzt6jp2J73').update({
//     body: 'Buy food'
// });

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native'
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     const empName = val.name;
//     const empTitle = val.job.title;
//     const empCompany = val.job.company;
//     console.log(`${empName} is a ${empTitle} at ${empCompany}.`);
// }, (e) => {
//     console.log('Error retrieving data: ', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching: ', e);
// });

// setTimeout(() => {
//     database.ref('age').set(31);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(32);
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data: ', e);
//     });

// database.ref().set({
//     name: 'Wesley Basson',
//     age: 32,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Johannesburg',
//         country: 'South Africa'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('Error: ', e)
// });

// database.ref('isSingle').remove()
//     .then(() => {
//         console.log('Remove succeeded!');
//     }).catch((e) => {
//         console.log('Remove failed with error: ', e);
//     });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     'location/country': 'United States'
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('Error: ', e)
// });

