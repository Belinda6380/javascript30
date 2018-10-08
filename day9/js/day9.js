const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeObnoxious() {
  const p = document.querySelector('p');
  p.style.color = '#dd1c90';
  p.style.fontSize = '6rem';
  p.style.fontWeight = 'bold';
  p.style.textTransform = 'uppercase';
  p.innerHTML = 'LOOK AT MEEEEE';
  p.prepend('💜💙💚 ');
  p.append(' 💛❤️💜');
}

// Regular
console.log('Hello');

// Interpolated
console.log('hello I am a %s string!', '❤️');

// Styled
console.log('%c I am some great text', 'font-size:50px; background: red; text-shadow: 10px 10px 0 blue;');

// warning!
console.warn('OH NO!');

// Error :|
console.error('ARGHHH!');

// Info
console.info('Is this the reality you wanted?');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old`);
  console.groupEnd(`${dog.name}`);
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
console.table(dogs);
