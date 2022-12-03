// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

const a = 8
const b = 8

// Adição (a + b)
const adicao = a + b

console.log(adicao)



// Subtração (a - b)
const subtracao = a - b

console.log(subtracao)



// Multiplicação (a * b)
const multiplicacao = a * b

console.log(multiplicacao)


// Divisão (a / b)
const divisao = a / b

console.log(divisao)



// Módulo (a % b)
const modulo = a % b

console.log(modulo)


// Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
const valor1 = 5;
const valor2 = 10;

if (valor1 > valor2) {
  console.log(`${valor1} é maior`)
} else {
  console.log(`${valor2} é maior`)
}


// Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
const valor3 = 5;
const valor4 = 10;
const valor5 = 5;

if (valor4 > valor3 && valor4 > valor5) {
  console.log(`${valor4} é maior`)
} else if (valor3 > valor4 && valor3 > valor5) {
  console.log(`${valor3} é maior`)
} else if (valor5 > valor3 && valor5 > valor4) {
  console.log(`${valor5} é maior`)
} else {
  console.log('São iguais')
}

// Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
let valor6 = 0

if (valor6 > 0) {
  console.log('Positive')
} else if (valor6 < 0) {
  console.log('Negative')  
} else {
  console.log('Zero')
}

// 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro. (Um ângulo será considerado inválido se não tiver um valor positivo.)
const angulo1 = -1
const angulo2 = 90
const angulo3 = 60

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log('Erro, só aceitamos valores positivos')
} else if ((angulo1 + angulo2 + angulo3) === 180) {
  console.log(true)
} else {
  console.log(false)
}



// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaXadrez = "Peão"

switch (pecaXadrez.toLowerCase()) {
  case 'peão':
    console.log('Para frente, uma casa por vez, com exceção do primeiro movimento, que podem ser duas casas')
    break;
  
  case 'cavalo':
    console.log('Duas casas horizontais ou verticais, e mais uma em um ângulo reto. Ele pode pular outras peças, desde que pare numa casa vazia')
    break;

  case 'torre':
    console.log('linha horizontal ou vertical (quantas casas quiser), mas não pode pular peças')
    break;

  case 'bispo':
    console.log('linha diagonal (quantas casas quiser), mas não pode pular peças')
    break;

  case 'rainha':
    console.log('linha horizontal, vertical e diagonal (quantas casas quiser), mas não pode pular peças')    
    break;

  case 'rei':
    console.log('linha horizontal, vertical e diagonal (uma casa por vez), mas não pode pular peças')   
    break;

  default:
    console.log('Peça inexistente')
    break;
}




// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
const nota = 80
let notaLetra = null

if (nota >= 90) {
  notaLetra = "A"
} else if (nota >= 80) {
  notaLetra = "B"
} else if (nota >= 70) {
  notaLetra = "C"
} else if (nota >= 60) {
  notaLetra = "D"
} else if (nota >= 50) {
  notaLetra = "E"
} else if (nota < 50) {
  notaLetra = "F"
} else {
  console.log('Nota informada inválida.')
}