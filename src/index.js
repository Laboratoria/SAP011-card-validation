import validator from './validator.js';

console.log(validator);

        // Função para aplicar a máscara ao número do cartão de crédito
function maskify(creditCardNumber) {
      const maskedString = '#'.repeat(creditCardNumber.length - 4) + creditCardNumber.slice(-4);
      return maskedString;
    }

         // Função para mascarar o número do cartão de crédito enquanto o usuário digita
function mascararNumeroCartao(input) {
      const creditCardNumber = input.value.replace(/\s/g, ''); // Remover espaços em branco
      const maskedNumber = maskify(creditCardNumber); // Aplicar a função maskify
      input.value = maskedNumber; // Atualizar o valor do campo de entrada
    }

      //Função para validar o número do cartão de  crédito quando o usuário clicar no botão 'Validar'
function validarCartao(event) {
      event.preventDefault();

      // Obter o valor do campo de entrada novamente
      const creditCardNumber = numeroCartaoInput.value.replace(/\s/g, ''); // Remover espaços em branco
      const isValid = validator.isValid(creditCardNumber);

  if (isValid) {
      alert('Número de cartão válido!');
  } else {
      alert('Número de cartão inválido! Por favor, verifique o número digitado e tente novamente.');
  }
}


      // Obter o elemento de entrada do número do cartão pelo seu ID
      const numeroCartaoInput = document.getElementById('numeroCartao');

      
      // Adicionar o evento oninput ao campo de entrada para chamar a função mascararNumeroCartao
      numeroCartaoInput.addEventListener('input', function () {
        mascararNumeroCartao(this);
}
);


//Adicionar o evento onclick ao botão "Validar" para chamar a função validarCartao
        const validarButton = document.querySelector('button[type="submit"]');
        validarButton.addEventListener('click', validarCartao);