const validator = {
  //Função para validar o número do cartão de crédito usando o Algoritmo de Luhn
  isValid: function (creditCardNumber) {
    // Remover espaços em branco do número do cartão
    const cleanedNumber = creditCardNumber.replace(/\s/g, '');

    // Converter o número de cartão em um array de dígitos
    const digitsArray = Array.from(cleanedNumber).map(Number);

    // Inverter o array de dígitos
    digitsArray.reverse();

    // Aplicar o Algoritmo de Luhn
    let sum = 0;
    for (let i = 0; i < digitsArray.length; i++) {
      if (i % 2 !== 0) {
        let doubleDigits = digitsArray[i] * 2;
        if (doubleDigits > 9) {
          doubleDigits -= 9;
        }
        sum += doubleDigits;
      } else {
        sum += digitsArray[i];
      }
    }

    // Verificar se o resultado da soma é um múltiplo de 10
    return sum % 10 === 0;
  },
  maskify: function (creditCardNumber) {
    if (creditCardNumber.length <= 4){
      return creditCardNumber;
    }
    const maskedString = '#'.repeat(creditCardNumber.length - 4) + creditCardNumber.slice(-4);
    return maskedString;
  },
  mascararNumeroCartao: function (input) {
    const creditCardNumber = input.value.replace(/\s/g, ''); // Remover espaços em branco
    const maskedNumber = this.maskify(creditCardNumber); // Aplicar a função maskify
    input.value = maskedNumber; // Atualizar o valor do campo de entrada
  },
};

export default validator;
