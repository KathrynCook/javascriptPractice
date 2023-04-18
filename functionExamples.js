const city = 'New York City';

// as an arrow function syntax
/* const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}; */

//as a function expression
/* const logCitySkyline = function() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}; */

console.log(logCitySkyline())

//as a function declaration - note it is able to be hoisted!
function logCitySkyline () {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}; 
