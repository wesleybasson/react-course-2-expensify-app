//
// Object Destructuring
//

// console.log('destructuring');

// const person = {
//     name: 'Wesley',
//     age: 31,
//     location: {
//         city: 'Johannesburg',
//         temp: 27
//     }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`)

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Divine Justice',
//     author: 'David Baldacci',
//     publisher: {
//         name: 'Grand Central Publishing'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

const address = ['Unit 3 Balamore Estate', '21 Eastwood Avenue', 'Randpark Ridge', 'Johannesburg', 'Gauteng', 'RSA'];
// const [unit, street, suburb, city, province, country] = address;
const [ , , , city, province = 'Not set'] = address;
console.log(`You are in ${city} ${province}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [description, , mediumPrice] = item;
console.log(`A ${description} costs ${mediumPrice}`);