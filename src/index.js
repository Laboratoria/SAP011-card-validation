import validator from './validator.js';

const submit = document.getElementById("btn-submit");

submit.addEventListener('click', function (e) {
  e.preventDefault();
  const cardNumber = document.getElementById("card").value;
  document.getElementById("card").value = validator.maskify(cardNumber);
  if(validator.isValid(cardNumber)) {
    document.getElementById("full-box").innerHTML = `
    <header>
        <h2>Cartao validado com sucesso!</h2>
        <br>
    </header>
    <!-- Criar um cartao aqui com os 4U numeros visivel e talvez a bandeira aqui(se der tempo) -->
        <br>
        <input type="submit" id="btn-submit" value="Validar novamente">`

    
  } else {

    alert("Por gentileza, verifique o numero informado e tente novamente.");
  }

});


