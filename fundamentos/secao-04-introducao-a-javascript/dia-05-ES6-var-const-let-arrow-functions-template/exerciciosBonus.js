// Crie duas funções JavaScript com as seguintes especificações:
// Não se esqueça de usar template literals

// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
// O nome da função deverá ser substituaX;
// A função deverá receber um nome por parâmetro;

// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
// A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

// Exemplo:
// Parâmetro: ‘Bebeto’
// Retorno: ‘Tryber Bebeto aqui!’
// Spoiler: O {{< extlink text=”método split()” href=”https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split”>}} pode ser utilizado de diferentes maneiras, como para separar as palavras de um texto.

const substituaX = nome => {
  const frase = 'Tryber x aqui!';
  const array = [frase][0].split(' ')
  for (let index = 0; index < array.length; index++) {
    if (array[index].length == 1 && array[index].toLocaleLowerCase() == 'x') {
    array[index] = nome
    } 
  }
  return array.join(' ')
}

console.log(substituaX('teresa'));








// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// O nome da função deverá ser minhasSkills;
// A função deverá receber o retorno da Função 1 - substituaX por parâmetro;

// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

// Exemplo de retorno:
// Tryber Bebeto aqui!
// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS

const minhasSkills = (substituaX) => {
  const skills = ['JavaScript','HTML','CSS']
  return `${substituaX} Minhas três principais habilidades são: ${skills}`
}
console.log(minhasSkills(substituaX('teresa')));