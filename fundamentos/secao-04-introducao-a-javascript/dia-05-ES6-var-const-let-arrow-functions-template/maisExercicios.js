// Parte II
// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.

// Crie uma função que ligue e desligue um motor de um carro.
  // Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);
    // Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;

  // Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);

  // Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).

  // Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.

let carroLigado = true;
let ligaDesliga = () => {
  carroLigado = (carroLigado == true) ? carroLigado = false : carroLigado = true
  let temporario = (carroLigado == true) ? statusCarro = 'ligado' : statusCarro = 'desligado'
  return `O motor está ${statusCarro}`
}
console.log(ligaDesliga());




//   🚀 Crie uma função que calcule a área de um círculo.

// Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.
// Com base nessa informação:
    // Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;
// Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);
// Crie a lógica para retornar a área do círculo;

// Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).
// Exemplo de retorno:
// Parâmetro: 3
// Retorno: Essa é a área do círculo: 28.259999999999998
// Parâmetro: 5
// Retorno: Essa é a área do círculo: 78.5

const circleArea = raio => {
  const pi = 3.14
  const area = pi * raio**2
  return `Essa é a área do círculo: ${area}`
}
console.log(circleArea(3));






// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// De olho na dica 👀: Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

// Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().


const maiorPalavra = (frase) => {
  const array = [frase][0].split(' ');
  let maiorPalavraProvisoria = array[0]
  for (const chave in array) {
    if (array[chave].length > maiorPalavraProvisoria.length) {
      maiorPalavraProvisoria = array[chave]
    }
      
  }
  return maiorPalavraProvisoria
}
console.log(maiorPalavra('ola pessoal querido com palavras enormementegrandeseerradas'));

