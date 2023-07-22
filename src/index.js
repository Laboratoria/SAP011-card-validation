import validator from './validator.js';

console.log(validator);

const submit = document.getElementById("btn-submit");


submit.addEventListener('click', function (e) {
  e.preventDefault();

  // const cartao = document.querySelector('.class=box spacing');
  const valor = document.querySelector('#card').value;
  //estudar mais seletores
  console.log(valor);




});


// let submit = document.getElementById("btn-submit");
// submit.addEventListener('click', function(e) {
//     e.preventDefault();
//     if {
//         console.log("funcionou!");
//     }
//     }
// )

