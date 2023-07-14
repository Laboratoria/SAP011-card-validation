import validator from './validator.js';

console.log(validator);

let submit = document.getElementById("btn-submit");

submit.addEventListener('click', function(e) {

    e.preventDefault();

    console.log("funcionou!");
} )