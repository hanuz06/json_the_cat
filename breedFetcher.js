const fetchBreedDescription = function(breedName, callback) {
  const request = require('request');


  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    } else {
      let data = JSON.parse(body);
      if (data.length === 0) {
        callback(`No cat with name ${breedName} found.`, null);
      } else {
        //callback(null, data[0]['description']);
        callback(null, data[0]['description']);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription
};