import validator from "./validator.js"

function isValid() {
  // Obtém o valor inserido no campo de número do cartão
  const numeroCartao = document.getElementsByName('number')[0].value;

  // Obtém o valor inserido no campo de nome do titular do cartão
  const nomeTitular = document.getElementsByName('NOME')[0].value;

  // Cria uma string vazia para armazenar a mensagem de validação do cartão
  let mensagem = '';

  // Verifica se o cartão é válido usando a função 'isValid' do módulo 'validator'
  if (validator.isValid(numeroCartao)) {
    // Se o cartão for válido, mascara o número do cartão e atualiza a mensagem
    const maskedCartao = validator.maskify(numeroCartao)
    mensagem = `O cartão ${maskedCartao} é válido. Titular: ${nomeTitular}.`;
  } else {
    // Se o cartão for inválido, atualiza a mensagem de erro
    mensagem = 'O cartão é inválido.';
  }

  // Obtém o elemento que representa o modal
  const modal = document.getElementById('modal');

  // Obtém o elemento onde será exibido o resultado da validação do cartão
  const resultadoDiv = document.getElementById('resultado');

  // Exibe a mensagem de validação no elemento de resultado
  resultadoDiv.innerText = mensagem;

  // Exibe o modal tornando-o visível
  modal.style.display = 'block';

  // Obtém o elemento que representa o conteúdo do modal
  const modalContent = document.getElementById('modal-content');

  // Aplica a animação de entrada do modal
  modalContent.style.animation = 'zoomIn 0.3s';
}

function fecharModal() {
  // Obtém o elemento que representa o modal
  const modal = document.getElementById('modal');

  // Obtém o elemento que representa o conteúdo do modal
  const modalContent = document.getElementById('modal-content');

  // Aplica a animação de saída do modal
  modalContent.style.animation = 'zoomOut 0.3s';

  // Após um breve intervalo (300ms), esconde completamente o modal
  setTimeout(() => {
    modal.style.display = 'none';

    // Limpa o conteúdo do resultado quando o modal é fechado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerText = '';
  }, 300);
}


// Adiciona um evento de clique ao botão "Verificar" para chamar a função 'isValid'
document.getElementById('botaov').addEventListener('click', isValid);

// Adiciona um evento de clique ao botão "Fechar" do modal para chamar a função 'fecharModal'
document.getElementById('fecharModal').addEventListener('click', fecharModal);
