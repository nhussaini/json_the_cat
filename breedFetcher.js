const request = require('request');
let breed = process.argv.slice(2);
//console.log(breed);
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  let breedName = data[0];
  if (breedName) {
    console.log(breedName.description);
  } else {
    console.log('This breed doesn\'t exist.');
  }

});
