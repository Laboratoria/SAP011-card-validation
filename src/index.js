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
        <h3>Pode fazer suas compras despreocupado(a).</h3>
        <br>
        <p>O numero de cartao informado passou pelo Validador ✔ </p>
        <br>
        <p>Deixe sua avaliacao e feedback para a "equipe"!</p>
        <p>Adoraria saber como foi sua experiencia conosco.😊</p>
        <br>
        <p>E com a sua avaliaçao que procuramos melhorar para melhor atende-lo!👍</p>
        <br>
        <p>A sua segurançao e de seus dados sao nossa prioridade em caso de duvida entre em contato no perfil localizado no roda pe da pagina.🔒</p>
        <br>
        <br>
        <input type="submit" id="btn-submit" value="Validar novamente">
        <br>
       `
  } else {

    alert("Por gentileza, verifique o numero informado e tente novamente.");
  }

});


