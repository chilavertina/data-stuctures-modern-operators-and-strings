'use strict';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

/*
// property NAMES (keys)
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// property VALUES
const values = Object.values(openingHours);
console.log(values);

// entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// //with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open); //ovo je u stvari ovo:
// /* if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);*/

// //primer
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //methods

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// //arrays
// const user = [
//   {
//     name: 'Jonas',
//     email: 'hello@jonas.io',
//   },
// ];

// console.log(user[0]?.name ?? 'User array empty');

// //ovo je duza verzija koda iznad
// if (user.length > 0) console.log(user[0].name);
// else console.log('user array empty');

// for of petlja
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); //rezultat je 10

// Nullish: null and undefined (not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //rezultat je 0 zbog nullish coalescing operatora ??
*/
/*
console.log('---- OR ----');
// || use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //ovde je rezultat 'Hello' jer je prvi true element, posto su undefined, 0 i '' false

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
/*
// 1. Destruktuiranje nizova i objekata uz pomoc REST operatora

// Primer spread operatora
const arr = [1, 2, ...[3, 4]];

// Primer rest operatora
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Funkcije i REST operator
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/
/*
// Spread operator

const arr = [7, 8, 9];

const newArray = [1, 2, ...arr];
console.log(newArray);

console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
*/
// Stvarni primer
/*const ingredients = [
  prompt("Let's make pasta! Ingredient1?"),
  prompt("Let's make pasta! Ingredient2?"),
  prompt("Let's make pasta! Ingredient3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);
*/

/*
// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
*/
/*
// Default variables
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
/*
//SETS
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Cheese'));
ordersSet.add('Bruschetti');
ordersSet.add('Bruschetti');
console.log(ordersSet);
ordersSet.delete('Pizza');
console.log(ordersSet);
//ordersSet.clear();

for (const order of ordersSet) {
  console.log(order);
}

const staff = ['waiter', 'chef', 'manager', 'chef', 'waiter'];
const staffSort = [...new Set(staff)];
console.log(staffSort);
console.log(new Set(['waiter', 'chef', 'manager', 'chef', 'waiter']).size);
console.log(new Set('urosmartic').size);
*/

//MAPS OSNOVE
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest);

console.log(rest.get(1));
console.log(rest.get('open'));
console.log(rest.get(false));
console.log(rest.get('categories'));

const time = 3;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

console.log(rest.has('categories'));
rest.delete(1);
console.log(rest);
console.log(rest.size);
// rest.clear();
console.log(rest);

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
*/

//MAPS ITERATION
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert objects to maps

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer is?'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]);
*/

//WORKING WITH STRINGS 1
const airline = 'TAP Air Portugal';
//const plane = 'A320';
/*
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); //daje na kojoj se poziciji prvo pojavljuje slovo
console.log(airline.lastIndexOf('r')); //daje na kojoj se poslednjoj poziciji pojavljuje slovo
console.log(airline.indexOf('Portugal')); //daje poziciju na kojoj se nalazi dati string

console.log(airline.slice(4)); // deli string od date pozicije
console.log(airline.slice(4, 7)); // deli string od pozicije 4 do pozicije 7

console.log(airline.slice(0, airline.indexOf(' '))); // izvlaci samo prvu rec stringa
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // izvlaci samo poslednju rec, +1 je dodat kako bi se uklonio razmak na pocetku poslednje reci

console.log(airline.slice(-2)); // deli string od poslednje dve pozicije
console.log(airline.slice(1, -1));

const proveriSrednjeSediste = function (seat) {
  const sediste = seat.slice(-1);
  if (sediste === 'B' || sediste === 'E') {
    console.log('Dobili ste sediste u sredini!');
  } else if (sediste === 'A' || sediste === 'F') {
    console.log('Imali ste srece, dobili ste sediste do prozora!');
  } else {
    console.log('Dobili ste sediste do prolaza!');
  }
};

proveriSrednjeSediste('12A');
proveriSrednjeSediste('1E');
proveriSrednjeSediste('52C');
proveriSrednjeSediste('11B');
proveriSrednjeSediste('122F');
*/

//WORKING WITH STRINGS 2
/*
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Popravljanje pocetnog velikog slova u imenu
const passenger = 'jOnAS';
const passengerLow = passenger.toLowerCase();
console.log(passengerLow);
const passengerCorrect = passengerLow[0].toUpperCase() + passengerLow.slice(1);
console.log(passengerCorrect);

const ispravnoIme = function (ime) {
  const passengerLow = ime.toLowerCase();
  const passengerCorrect =
    passengerLow[0].toUpperCase() + passengerLow.slice(1);
  console.log(passengerCorrect);
};

ispravnoIme('uRoS');
ispravnoIme('ZleNKA');

// Comparing email

const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.Io \n';

//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEMail = lowerEmail.trim(); //uklanjanje razmaka

const normalizedEmail = loginEmail.toLowerCase().trim(); //ovo je skracena metoda ove iznad
console.log(normalizedEmail);

const proveriEmail = function (emailUnos) {
  const ispravanEmail = 'urosmartic@gmail.com';
  const normalizedEmail = emailUnos.toLowerCase().trim();
  if (ispravanEmail === normalizedEmail) {
    console.log(`Vas email je dobro napisan!`);
  } else {
    console.log(`Proverite da li ste dobro uneli Vas email.`);
  }
};

proveriEmail('  UroMarTic@gmail.com');

//replacing
const priceGB = '288,97???';
const priceUS = priceGB.replace('???', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); //replace menja samo prvu rec na koju naidje
console.log(announcement.replaceAll('door', 'gate')); //replaceAll menja sve reci koje se nalaze u stringu
console.log(announcement.replace(/door/g, 'gate')); // /door/g je 'regular expression' i on menja sve reci koje se nalaze u stringu takodje, ali to je stariji nacin menjanja

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('Airbus'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log(`Part of the new Airbus family`);
}

//Vezba
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (
    baggage.includes('knife') ||
    baggage.includes('gun') ||
    baggage.includes('chocolate')
  ) {
    console.log(
      'You are NOT allowed on board! Please, leave your guns, knifes and chocolates and step aside.'
    );
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and gun for protection');
checkBaggage('I have some chocolate just in case my sugar runs down!');
*/

//WORKING WITH STRINGS 3
/*
//split and join
console.log('a+very+nice+string'.split('+'));
console.log('Uros Martic'.split(' '));

const [ime, prezime] = 'Uros Martic'.split(' ');

const novoIme = ['Mr.', ime, prezime.toUpperCase()].join('---');
console.log(novoIme);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const ime of names) {
    namesUpper.push(ime[0].toUpperCase() + ime.slice(1)); //krace resenje: namesUpper.push(ime.replace(ime[0], ime[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jean claude van damme');
capitalizeName('mitar mitra mitar');
capitalizeName('uros martic');
*/
// padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Uros'.padStart(25, '+'));

console.log(message.padEnd(25, '+'));
console.log('Uros'.padEnd(25, '+'));

console.log(message.padStart(25, '+').padEnd(30, '-'));
console.log('Uros'.padStart(25, '+').padEnd(30, '-'));

const maskedCreditCard = function (number) {
  const numberString = number + ''; //ovo smo uradili da bi number pretvorili u string
  const last = numberString.slice(-4);
  return last.padStart(numberString.length, '*');
};

console.log(maskedCreditCard('1234867495043719'));
console.log(maskedCreditCard(1234867495043719));
console.log(maskedCreditCard('1234867'));

// repeat
/*
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (number) {
  console.log(`There are ${number} planes in line ${'???'.repeat(number)}`);
};

planesInLine(6);
planesInLine(12);
planesInLine(3);
*/
