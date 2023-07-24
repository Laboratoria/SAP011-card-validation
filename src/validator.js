const validator = {

    //Função para validar o número do cartão de crédito usando o Algoritimo de Luhn
    isValid: function (creditCardNumber) {
  
    //Remover espaços em branco do número do cartão
    const cleanedNumber = creditCardNumber.replace(/\s/g, '');

    //Converter o número de cartão em um array de dígitos
    const digitsArray = Array.from(cleanedNumber).map(Number);

    //Inverter o array de dígitos
    digitsArray.reverse();

    //Aplicar o Algoritimo de Luhn
      let sum = 0;
        for (let i = 0; i < digitsArray.length; i++) {
          if (i % 2 !== 0) {
            let doubleDigits = digitsArray[i] * 2;
            if (doubleDigits > 9) {
              doubleDigits -= 9;
            }
        sum += doubleDigits;
        } else {
        sum +=digitsArray[i];
      }
  }

   //Verificar se o resultado da soma é um múltiplo de 10
  return sum % 10 === 0;
 },
};

export default validator;