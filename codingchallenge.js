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
