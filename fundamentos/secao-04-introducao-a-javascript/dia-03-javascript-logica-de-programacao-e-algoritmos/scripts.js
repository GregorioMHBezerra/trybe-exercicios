// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let resFatorial = null;


for (let index = 10; index >= 1; index--) {
  if (resFatorial == null) {
    resFatorial = index
  } else {
    resFatorial *= index
  };
}
console.log(resFatorial);




// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'casa';

for (let index = word.length-1; index >= 0; index--) {
  console.log(word[index]);
}





// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = 0;
let menorPalavra = 0;

for (let indexarray = 0; indexarray < array.length; indexarray++) {

  //Para substituir esse primeiro IF poderia declarar a menorPalavra com array[0], invés de 0
  if (menorPalavra == 0 && maiorPalavra == 0) {
    menorPalavra = array[indexarray]
    maiorPalavra = array[indexarray] 
  } else if (menorPalavra.length > array[indexarray].length) {
    menorPalavra = array[indexarray]
  } else if (maiorPalavra.length < array[indexarray].length) {
    maiorPalavra = array[indexarray]
  }
} 

console.log(menorPalavra);
console.log(maiorPalavra);


// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorPrimo = 0;

for (let numero = 2; numero <= 50; numero++) {
  let primo = true;
  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      primo = false;
    }
  }
    if (primo == true) {
      maiorPrimo = numero
  }
}
console.log(maiorPrimo);




// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****

let numero = 5;

for (let lado = 0; lado < numero; lado++) {
console.log('*'.repeat(numero)); 
}


// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
for (let base = 1; base <= numero; base++) {
  console.log('*'.repeat(base));
  
}

// Agora inverta o lado do triângulo. Por exemplo:
for (let base = 1; base <= numero; base++) {
  console.log(' '.repeat(numero - base) + '*'.repeat(base));
  
}


// Depois, faça uma pirâmide com n asteriscos de base:


numero = 6;
let linhaImpressao = '';
let controlLeft = Math.ceil(numero/2);
let controlRight = Math.ceil(numero/2);

//Primeiro for define a altura da pirâmide
for (let eixox = 1; eixox <= Math.ceil(numero/2); eixox += 1) {

  //Segundo for estabelece a largura e constrói a linha junto com o if abaixo
  for (let eixoy = 1; eixoy <= numero; eixoy += 1) {

    //Esse if está construindo a linha que será impressa inteira
    if (eixoy >= controlLeft && eixoy <= controlRight) {
      linhaImpressao = linhaImpressao + '*';
    } else {
      linhaImpressao = linhaImpressao + ' ';
    }
  }
  //imprime a linha
  console.log(linhaImpressao);
  //zera a linha para a contrução da próxima
  linhaImpressao = '';
  //Calibra os controles
  controlRight += 1;
  controlLeft -= 1
};




// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
numero = 7;
let controlLeft2 = Math.ceil(numero/2);
let controlRight2 = Math.ceil(numero/2);
for (let line = 1; line <= Math.ceil(numero/2); line += 1) {
  let linhaImpressao2 = '';
  for (let col = 1; col <= numero; col += 1) {
    if (col == controlLeft2 || col == controlRight2 || line == Math.ceil(numero/2)) {
      linhaImpressao2 += '*';
    } else {
      linhaImpressao2 += ' ';
    }
  }
  controlLeft2 -= 1;
  controlRight2 += 1;
  console.log(linhaImpressao2);
}