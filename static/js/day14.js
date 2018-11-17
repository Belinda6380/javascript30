// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Alice';
let name2 = name;
console.log(name, name2);
name = 'Bob';
console.log(name, name2);

const players = ['Alice', 'Bob', 'Charles', 'Dana'];

// we want to make a copy
const team = players;

console.log(players, team);

// edited the original array too
team[3] = 'Errol';

// take a copy instead
const team2 = players.slice();

// create a new array and concat the old one in
const team3 = [].concat(players);

// use the ES6 spread
const team4 = [...players];
team4[3] = 'Fred';
console.log(team4);

const team5 = Array.from(players);

// with objects
const person = {
  name: 'Alice G Herbison',
  age: 100
};

// think we make a copy
const captain = person;
captain.number = 99;

// take a copy instead
const cap2 = Object.assign({}, person, { number: 99, age: 200 });
console.log(cap2);

// only 1 level deep

const alice = {
  name: 'Alice',
  age: 100,
  social: {
    twitter: '@alicegherbison',
  }
};

console.log(alice);

const dev = Object.assign({}, alice);

const dev2 = JSON.parse(JSON.stringify(alice));