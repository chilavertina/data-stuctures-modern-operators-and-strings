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

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//CODING CHALLENGE 1
/* 
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Tiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// const { team1, x, team2 } = game.odds; moje resenje
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  const [scorer1, scorer2, scorer3, scorer4] = players;
  console.log(`${players.length} goals were scored.`);
  console.log(scorer1, scorer2, scorer3, scorer4);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

team1 > team2 && console.log(`Team2 is a winner!`);
team1 < team2 && console.log(`Team1 is a winner!`);
*/

// CODING CHALLENGE 2
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
/*
//CODING CHALLENGE 3
//1.
let eventsArr = [...gameEvents.values()];
console.log(eventsArr);
const events = new Set(eventsArr);
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//4.
console.log([...gameEvents.entries()]);
for (const [min, eve] of gameEvents.entries()) {
  const izvestaj =
    min < 45 ? `[FIRST HALF] ${min}: ${eve}` : `[SECOND HALF] ${min}: ${eve}`;
  console.log(izvestaj);
}
*/

// CODING CHALLENGE
/* 
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const splitText = text.split('\n');

  for (const [i, stringText] of splitText.entries()) {
    const [prva, druga] = stringText.toLowerCase().trim().split('_');
    const resenje = [prva, druga[0].toUpperCase()].join('') + druga.slice(1);
    console.log(`${resenje.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});*/

// CODING CHALLENGE
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const razdvojeno = flights.split('+');

const resenje = [];
for (const proba of [...razdvojeno]) {
  const rezultat = `${proba}`;
  const delovi = rezultat.split(';');
  console.log(delovi);
  resenje.push(delovi);
}
console.log(resenje);

for (const [a, b, c, d] of [...resenje]) {
  const informacija = `${a.replaceAll('_', ' ')} from ${b
    .toUpperCase()
    .slice(0, 3)} to ${c.toUpperCase().slice(0, 3)} (${d.replace(':', 'h')})`;
  if (informacija.startsWith(' Delayed')) {
    console.log(`🔴 ${informacija}`);
  } else {
    console.log(informacija);
  }
}
