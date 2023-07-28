import validator from './validator.js';

const submit = document.getElementById("btn-submit");

const numero = document.getElementById("card").value;

submit.addEventListener('click', function (e) {
  e.preventDefault();

  
  if(validator.isValid(numero)) {
    document.getElementById("register-form").innerHTML = `
                    <header>
                        <h2>Cartao validado com sucesso!</h2>
                        <br>
                    </header>
                        <br>
                        <input type="submit" id="btn-submit" value="Validar novamente">`
  } else {

    alert("Por gentileza, verifique o numero informado e tente novamente.");
  }

});


