const cats = [{ name: 'Magic', age: 15 }, { name: 'Garfield', age: 40 }];

function makeObnoxious() {
  const p = document.querySelector('#unobnoxious');
  p.style.color = '#dd1c90';
  p.style.fontSize = '6rem';
  p.style.fontWeight = 'bold';
  p.style.textTransform = 'uppercase';
  p.innerHTML = '💜💙💚 LOOK AT MEEEEE 💛❤️💜';
}

// Regular
console.log('Hello');

// Interpolated
console.log('I %s cats', '❤️');

// Styled
console.log('%c Look how obnoxious I am', 'font-size:4rem; color: #10F0F0; background: #ffee00; text-shadow: 10px 10px 0 #dd1c90;');

// warning!
console.warn('OH NO!');

// Error :|
console.error('ARGHHH!');

// Info
console.info('Is this the reality you wanted? ...우린 살아있어 tonight');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'Something is very wrong here...');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
cats.forEach(cat => {
  console.groupCollapsed(`${cat.name}`);
  console.log(`This is ${cat.name}`);
  console.log(`${cat.name} is ${cat.age} years old`);
  console.log(`${cat.name} is ${((cat.age - 2) * 4) + 25} years old`);
  console.groupEnd(`${cat.name}`);
});

// counting
console.count('Alice');
console.count('Bob');
console.count('Alice');
console.count('Alice');
console.count('Bob');
console.count('Alice');
console.count('Alice');


// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

//table
console.table(cats);
