import validator from './validator.js';

console.log(validator);

// Obter o elemento de entrada do número do cartão pelo seu ID
const numeroCartaoInput = document.getElementById('numeroCartao');

// Adicionar o evento oninput ao campo de entrada para chamar a função mascararNumeroCartao
numeroCartaoInput.addEventListener('input', function () {
  validator.mascararNumeroCartao(this);
});

//Adicionar o evento onclick ao botão "Validar" para chamar a função validarCartao
const validarButton = document.querySelector('button[type="submit"]');
validarButton.addEventListener('click', function (event) {
  validarCartao(event);
});

function validarCartao(event) {
  event.preventDefault();

  const creditCardNumber = numeroCartaoInput.value.replace(/\s/g, ''); // Remover espaços em branco
  const isValid = validator.isValid(creditCardNumber);
  const alertElement = document.getElementById('alert');
  const invalidOptionsElement = document.getElementById('invalidOptions');
  if (isValid) {
    alertElement.textContent = 'Número de cartão válido!';
    alertElement.classList.remove('alert-error');
    alertElement.classList.add('alert-success');
    invalidOptionsElement.style.display = 'none';
  } else {
    alertElement.textContent = 'Número de cartão inválido! Por favor, verifique o número digitado e tente novamente.';
    alertElement.classList.remove('alert-success');
    alertElement.classList.add('alert-error');
    invalidOptionsElement.style.display = 'block';
  }
  alertElement.style.display = 'block';
  setTimeout(() => {
    alertElement.style.display = 'none';
  }, 5000);
  }
  function tentarNovamente() {
       console.log('Tentando novamente...');
  }
  
  function assistirVideo() {
       window.location.href = '/moon.mp4';
  }


alertElement.style.display = 'block';
setTimeout(() => {
  alertElement.style.display = 'none';
}, 5000);

