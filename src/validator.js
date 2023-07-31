const validator = {
  isValid,
  maskify,
};
export default validator;

function isValid(cardNumber) {
  let sum = 0
  const newArray = []
  if (cardNumber.length > 10) {
    for (let i = 0; i < cardNumber.length; i++) {
      let digit = parseInt(cardNumber[i]);
      if (i % 2 === 1) {
        digit *= 2;
        if (digit > 9) {
          const digitDezena = parseInt(digit / 10);
          const digitUnidade = digit % 10;
          const numberValidate = digitDezena + digitUnidade;
          newArray[i] = numberValidate;
        } else {
          newArray[i] = digit;
        }
      }else{
        newArray[i] = digit;
      }
      sum += newArray[i];
    }

  }  
  return cardNumber.length > 10 && sum % 10 === 0;
  

}
//https://www.google.com/search?q=como+usar+funcao+maskify+javascript+no+javascript&rlz=1C1GCEA_enBR1020BR1020&biw=1366&bih=625&tbm=vid&sxsrf=AB5stBgk-9pUqo6SL8HVv7i_KMQkZ26SVA%3A1690815030866&ei=NsrHZPq5NOOz5OUPw4qVuA0&ved=0ahUKEwj6rK7qmLmAAxXjGbkGHUNFBdcQ4dUDCA0&uact=5&oq=como+usar+funcao+maskify+javascript+no+javascript&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIjFjb21vIHVzYXIgZnVuY2FvIG1hc2tpZnkgamF2YXNjcmlwdCBubyBqYXZhc2NyaXB0MgUQABiiBDIFEAAYogRI2hdQrQ5YtRNwAHgAkAEAmAGaAaAB3ASqAQMxLjS4AQPIAQD4AQHCAgQQIxgniAYB&sclient=gws-wiz-video#fpstate=ive&vld=cid:15a7e39e,vid:r-8isv_TnVA
function maskify(cardNumber) {
  if (cardNumber.length <= 4) {
    return cardNumber;
  }

  const lastFourCard = cardNumber.slice(cardNumber.length - 4, cardNumber.length);
  const maskedChars = "#".repeat(cardNumber.length - 4);
       
  return maskedChars + lastFourCard;
}





// function security(valor) {
//   const placeholder = document.querySelectorAll(`input[placeholder=${valor}]`);
//   for (let i = 0; i < placeholder.length; i++) {
//     if (placeholder[i].value.includes('*')) {
//       return true;
//     }
//   }
//   return false;
// }