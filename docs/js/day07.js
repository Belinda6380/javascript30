const people = [
{ name: 'Alice', year: 1990 },
{ name: 'Bob', year: 1950 },
{ name: 'Carol', year: 1972 },
{ name: 'Drake', year: 2007 }
];

const comments = [
{ text: 'Love this!', id: 523423 },
{ text: 'Super good', id: 823423 },
{ text: 'You are the best', id: 2039842 },
{ text: 'Sushi is my fave food ever', id: 123523 },
{ text: 'Nice nice nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

const isAdult = people.some(person => ((new Date().getFullYear()) - person.year >= 19));
console.log({isAdult});

const allAdults = people.every(person => ((new Date().getFullYear()) - person.year >= 19));
console.log({allAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comment = comments.find(comment => comment.id === 823423);
console.log({comment});

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);

console.log({index});

// comments.splice(index,1);

const newComments = [
...comments.slice(0, index),
...comments.slice(index + 1)
];
console.log({newComments});