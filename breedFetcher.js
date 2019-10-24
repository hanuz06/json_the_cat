const request = require('request');
let userInput = process.argv.slice(2);
let q = userInput[0];
console.log(q);

request(`https://api.thecatapi.com/v1/breeds/search?q=${q}`, (error, response, body) => {

  if (error) {
    console.log('You have an error');
    console.log(error.code);
    return;
  } else {
    let data = JSON.parse(body);
    // console.log(data[0]);
    // console.log(typeof data);
    //console.log(response);
    console.log('statusCode:', response && response.statusCode);

    if (data.length === 0) {
      // console.log("not found");
      console.log(`No cat with name ${q} found.`);
    } else {
      console.log(data.length);
      console.log(data[0].description);
    }
  }
});
