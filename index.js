const {
  fetchBreedDescription
} = require('./breedFetcher');

let q = process.argv.slice(2);
let breedName = q[0];
console.log(breedName);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('You have an error');
    console.log('Error fetch details:', error);
    console.log('Description: ', desc);
  } else {
    console.log('SUCCESS!');
    console.log('Error fetch details:', error);
    console.log('Description: ', desc);
  }
});