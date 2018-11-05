// const person = {
//   name: 'Kevin',
//   age: 36,
//   location: {
//     city: 'Cheras',
//     temp: 30
//   }
// };

// const {name: firstName = 'Anonymous', age} = person;
// const { city, temp: temperature } = person.location;

// console.log(`${firstName} is ${age}. ${city} is ${temperature} degree.`)


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName)

//Array destructuring
const address = ['10, jln dayang', 'Cheras', 'Kuala Lumpur', '43200'];

const [, city, state] = address;

console.log(`You are in ${city}, ${state}`); 


const item = ['coffee (hot)', '$2.00', '$2.50', '$2.80'];
const [drink, , medium, ice] = item

console.log(`A medium ${drink} cost ${medium}.`)