const validator = {
  isValid,
  maskify,
};
export default validator;

const numero = document.getElementById("card").value;
const card = numero;
const func = num => Number(num);
const intArr = Array.from(String(card), func);

console.log(intArr);

function isValid(intArr) {
  if(intArr.length >= 12 ){
    
    let sum = 0
    for (let i = 0; i < intArr.length; i++){
      let digit = intArr[i];
      if (intArr[i] % 2 === 0){
        digit*=2;
        if(digit > 9){
          digit -= 9;
        }
        sum += digit;
      }
    }
    return sum % 10 === 0; 
    
  } else {
    return false;
  }
  
  function maskify(arrInt) {
    if (arrInt.length <= 5) {
      return str;
    }
  
    const lastFourCard = arrInt.substr(arrInt.length, - 4);
    const maskedChars = '*'.repeat(arrInt.length - 12);
    const maskedString = maskedChars + lastFourCard;
  
    return maskedString;
  }
  

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