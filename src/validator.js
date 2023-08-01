// Define um objeto chamado 'validator' que contém duas funções: 'isValid' e 'maskify'
const validator = {
  // Função 'isValid': recebe um número de cartão como entrada e verifica se é válido
  isValid : function (numberCard) {
    // Inicializa a variável 'soma' com 0, será usada para calcular a soma dos dígitos
    let soma = 0;
    // Inicializa a variável 'dobro' como false, será usada para alternar entre dobrar ou não o valor do dígito
    let dobro = false;

    // Loop para percorrer os dígitos do cartão, começando do último e indo até o primeiro
    for (let i = numberCard.length - 1; i >= 0; i--) {
      // Converte o caractere para um número inteiro
      let digit = parseInt(numberCard.charAt(i), 10);

      // Verifica se o dígito deve ser dobrado
      if (dobro) {
        digit *= 2;
        // Se o dígito dobrado for maior que 9, subtrai 9 para garantir que seja menor ou igual a 9
        if (digit > 9) digit -= 9;
      }

      // Adiciona o dígito à soma total
      soma += digit;
      // Alterna o valor de 'dobro' para o próximo dígito
      dobro = !dobro;
    }

    // Retorna true se a soma for divisível por 10 (ou seja, se o cartão é válido), senão retorna false
    return soma % 10 === 0;
  },

  // Função 'maskify': recebe um número de cartão como entrada e mascara os dígitos, exceto os últimos 4
  maskify : function (numberCard) {
    // Se o número de cartão tiver 4 dígitos ou menos, não é necessário mascarar, então retorna o número original
    if (numberCard.length <= 4) return numberCard;

    // Obtém os últimos 4 dígitos do número do cartão
    const ultimos = numberCard.slice(-4);

    // Obtém os dígitos restantes do número do cartão e substitui todos os dígitos e letras por '#'
    const esconder = numberCard.slice(0, -4).replace(/\d|\w/g, '#');

    // Combina os dígitos mascarados com os últimos 4 dígitos originais e retorna o resultado
    const Ultimosesconder = esconder + ultimos;

    return Ultimosesconder;
  }
}

// Exporta o objeto 'validator' para ser utilizado em outros arquivos
export default validator;
