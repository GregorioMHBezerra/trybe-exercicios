let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log(); 
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element)
}

// Some todos os valores contidos no array e imprima o resultado;
let soma = 0
for (let index = 0; index < numbers.length; index++) {
  soma += numbers[index];
}
console.log(soma)

// Calcule e imprima a média aritmética dos valores contidos no array;
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
let soma2 = 0
for (let index = 0; index < numbers.length; index++) {
  soma2 += numbers[index];
}
let mediaAritimetica = soma2/numbers.length
console.log(mediaAritimetica)
if (mediaAritimetica > 20) {
  console.log('Valor maior que 20')
} else {
  console.log('valor menor ou igual a 20')
}



// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let maiorValor = 0
let menorValor = null
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element > maiorValor) {
    maiorValor = element
  }
  if (menorValor === null) {
    menorValor = element
  } else if (menorValor > element) {
    menorValor = element
  }
}
console.log(maiorValor)
console.log(menorValor)


// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let totalImpares = 0
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 !== 0) {
    totalImpares += 1
  }
}
if (totalImpares <= 0) {
  console.log('Nenhum valor ímmpar encontrado')
} else {
  console.log(totalImpares)
}

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let array = [] 
for (let index = 1; index <= 25; index++) {
  array.push(index)
}
console.log(array)


// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.


for (let index = 0; index < array.length; index++) {
  console.log(array[index]/2);
  
}