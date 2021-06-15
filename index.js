const bio = require('./information.js');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`${bio.name} ${bio.campus}`),
    e : "oO",
    T : "U ",
}));