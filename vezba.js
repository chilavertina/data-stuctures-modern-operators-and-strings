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

// for (const kategorije of restaurant.categories) {
//   console.log(kategorije);
// }

// for (const kategorije of restaurant.categories.entries()) {
//   console.log(kategorije);
// }

// for (const [red, naziv] of restaurant.categories.entries()) {
//   console.log(`Pod rednim brojem ${red + 1} u meniju nalazi se ${naziv}`);
// }

const borbenaVozila = {
  bv: ['tenk', 'tnm', 'tzi', 'tam 110', 'tam 150', 'puh', 'brdm'],
};

const bataljon = {
  lokacija: 'kasarna',
  mesto: ['Sremska Mitrovica', 'Kraljevo', 'Nis', 'Vranje'],
  borbenaVozila,
  radnoVreme: {
    radnimDanima: {
      pocetak: '07',
      kraj: 15,
    },
    vikendom: 'samo sluzba dezurstva',
  },
  sastavJedinice: ['komanda', 'komandni vod', 'tenkovska ceta'],
};
/*
for (const gradovi of bataljon.mesto) console.log(gradovi);
for (const gradovi of bataljon.mesto.entries()) {
  console.log(gradovi);
}

for (const [brigada, grad] of bataljon.mesto.entries()) {
  console.log(
    `Tenkovski bataljon ${brigada + 1}. brigade se nalazi u gradu ${grad}`
  );
}
*/

// console.log(bataljon.radnoVreme.radnimDanima?.pocetak);

// console.log(bataljon.radnoVreme?.vikendom.pocetak);

// for (const otvorena of bataljon.radnoVreme.radnimDanima.pocetak) {
//   const radi =
//     bataljon.radnoVreme.radnimDanima?.novo ||
//     'funkcionise samo sluzba dezurstva';
//   console.log(`Radnim danima kasarna se otvara u ${radi} casova`);
// }

// for (const vozila of bataljon.borbenaVozila.bv) {
//   console.log(vozila);
// }

// const propertiesKolicina = Object.keys(bataljon.borbenaVozila.bv);
// const propertiesVrsta = Object.values(bataljon.borbenaVozila.bv);
// const properties = Object.entries(bataljon.borbenaVozila.bv);
// console.log(propertiesKolicina);
// console.log(propertiesVrsta);
// console.log(properties);
// console.log(
//   `U bataljonu imamo ukupno ${propertiesKolicina.length} vrsta borbenih vozila`
// );

// let spisak = `Na spisku vozila su: `;

// for (const spisakVozila of propertiesVrsta) console.log(spisakVozila);

// for (const spisakVozila of propertiesVrsta) {
//   spisak += `${spisakVozila}, `;
// }
// console.log(spisak);

// for (const [rb, vozilo] of properties) {
//   console.log(`U ${Number(rb) + 1}. vrsti se nalazi ${vozilo}`);
// }

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
const strelci = Object.entries(game.scored);
console.log(strelci);
for (const [gol, igrac] of strelci) {
  console.log(`Strelac ${Number(gol) + 1}. gola je: ${igrac}`);
}

const kvote = Object.values(game.odds);
console.log(kvote);

let srednjaKvota = 0;

for (const kvota of kvote) {
  srednjaKvota += kvota;
}

console.log(`Srednja kvota je ${srednjaKvota / kvote.length}`);

for (const [tim, kvota] of Object.entries(game.odds)) {
  const kvotaTimova = tim === 'x' ? ' nereseno' : ` pobedu ${game[tim]}`;
  console.log(`Kvota za${kvotaTimova} je: ${kvota}`);
}
*/

//SETS
/*
const tenkovi = new Set([
  't72',
  'm84',
  't72ms',
  't72',
  't72ms',
  't55',
  't72',
  't72',
  't72',
]);
console.log(tenkovi);
console.log(tenkovi.size);
console.log(tenkovi.has('t90'));
console.log(tenkovi.has('m84'));
console.log(tenkovi.add('m84a'));
console.log(tenkovi.size);
console.log(tenkovi.delete('t55'));
console.log(tenkovi);

for (const vrste of tenkovi) {
  console.log(vrste);
}

const transporteri = [
  'm80',
  'm80a',
  'lazar',
  'milos',
  'm80a',
  'm80a',
  'm80a',
  'lazar',
  'lazar',
];
const transporteriVrste = new Set(transporteri);
console.log(transporteriVrste);
const transporteriVrsteNiz = [...new Set(transporteri)]; //pretvaranje Set-a u niz
console.log(transporteriVrsteNiz);
console.log(
  new Set([
    'm80',
    'm80a',
    'lazar',
    'milos',
    'm80a',
    'm80a',
    'm80a',
    'lazar',
    'lazar',
  ]).size
);
*/

// MAPS
