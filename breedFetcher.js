const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      //console.log(error);
      //return;
      callback(error);
      return;
    }
    const data = JSON.parse(body);
    let breedName = data[0];
    if (breedName) {
      //console.log(breedName.description);
      callback(null, breedName.description);
    } 
    else {
      callback('This breed does not exits');
    }
  });
};

module.exports = { fetchBreedDescription };

