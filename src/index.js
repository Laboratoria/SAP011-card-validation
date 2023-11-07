    import validator from './validator.js';

    const numeroCartaoInput = document.getElementById('numeroCartao');
    let creditCardNumber = '';
    
    numeroCartaoInput.addEventListener('input', function () {
      creditCardNumber = this.value.replace(/\s/g, '');
    
     
      if (creditCardNumber.length > 4) {
        const maskedNumber = creditCardNumber.slice(0, -4).replace(/./g, '#') + creditCardNumber.slice(-4);
        this.value = maskedNumber; 
      }
    });
    
    const validarButton = document.querySelector('button[type="submit"]');
    validarButton.addEventListener('click', function (event) {
      event.preventDefault();
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
    });
    