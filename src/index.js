import validator from './validator.js';

console.log(validator);

const submit = document.getElementById("btn-submit");

submit.addEventListener('click', function (e) {
  e.preventDefault();
  const isValid = validator.isValid(valor);
  if(isValid) {
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


