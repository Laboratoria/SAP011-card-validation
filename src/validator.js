const validator = {
  isValid: function (creditCardNumber) {
    const cleanedNumber = creditCardNumber.replace(/\s/g, '');
    const digitsArray = Array.from(cleanedNumber).map(Number);

    digitsArray.reverse();

    let sum = 0;
    for (let i = 0; i < digitsArray.length; i++) {
      if (i % 2 === 1) {
        let doubleDigits = digitsArray[i] * 2;
        if (doubleDigits > 9) {
          doubleDigits -= 9;
        }
        sum += doubleDigits;
      } else {
        sum += digitsArray[i];
      }
    }

    return sum % 10 === 0
  
  },
  maskify: function (creditCardNumber) {
    if (creditCardNumber.length <= 4) {
      return creditCardNumber;
    } 
    const maskedString = '#'.repeat(creditCardNumber.length - 4) + creditCardNumber.slice(-4);
    return maskedString;
  },
  mascararNumeroCartao: function (input) {
    const creditCardNumber = input.value.replace(/\s/g, '');
    const maskedNumber = this.maskify(creditCardNumber);
    input.value = maskedNumber; 
  },
};


export default validator;
