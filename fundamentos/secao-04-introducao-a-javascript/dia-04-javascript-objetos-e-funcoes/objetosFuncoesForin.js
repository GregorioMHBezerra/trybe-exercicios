// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}
console.log(player.medals.golden);


// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (const chave in names) {
  console.log(`Olá ${names[chave]}`);
  
}


// Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (const chave in car) {
  console.log(`${chave} ${car[chave]}`);
}


// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function adicao(numero1, numero2) {
  return numero1 + numero2
}
function subtracao(numero1, numero2) {
  return numero1 - numero2
}
function multiplicacao(numero1, numero2) {
  return numero1 * numero2
}
function divisao(numero1, numero2) {
  return numero1 / numero2
}
function modulo(numero1, numero2) {
  return numero1 % numero2
}


// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorDeDois(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1
  } else if (numero1 < numero2) {
    return numero2
  } else {
    return 'numeros iguais'
  }
}
console.log(maiorDeDois(5, 6));



// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorDeTres(numero1, numero2, numero3) {
  let maior = 0;

  if ((numero1 > numero2 || numero1 == numero2) && (numero1 > numero3 || numero1 == numero3)) {
    maior = numero1
  } else if ((numero2 > numero1 || numero2 == numero1) && (numero2 > numero3 || numero2 == numero3)) {
    maior = numero2
  } else if ((numero3 > numero1 || numero3 == numero1) && (numero3 > numero2 || numero3 == numero2)) {
    maior = numero3
  }
  return maior
}
console.log(maiorDeTres(8, 6, 5));




// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function positivoNegativo(numero) {
  if (numero > 0) {
    return 'positive'
  } else if (numero < 0) {
    return 'negative'
  } else {
    return 'zero'
  }
}
console.log(positivoNegativo(8));

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

function triangulo(angulo1, angulo2, angulo3) {
  if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    return 'Mensagem de erro'
  } else if (angulo1 + angulo2 + angulo3 == 180) {
    return true
  } else {
    return false
  }
}

console.log(triangulo(80, 50, -40));