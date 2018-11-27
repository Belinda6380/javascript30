const films = ['The Villainess', 'Charlie\'s Angels', 'Constantine', 'The Lake House', 'The Matrix', 'The Addams Family', 'Casper', 'The Orphanage', 'The Secret Garden', 'Metropolis', 'Run Lola Run', 'Brief Encounter', 'Groundhog Day'];

function strip(bandName){
  return bandName.replace(/^(a |the |an)/i, '').trim();
}

const sortedFilms = films.sort(function(a,b) {
  if(strip(a) > strip(b)) {
    return 1;
  } else {
    return -1;
  }
});

document.querySelector('#films').innerHTML =
  sortedFilms
    .map(film => `<li>${film}</li>`)
    .join('');