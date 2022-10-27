// Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false

function palindromo(palavra) {
  if (palavra === palavra.split('').reverse().join('')) {
    return true
  } else {
    return false
  }
}

console.log(palindromo('arara'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function maiorInteiro(array) {
  let maior = 0;
  for (let index in array) {
    if (array[index] > maior) {
      maior = array[index]
    }
  }
  return array.indexOf(maior)
}
console.log(maiorInteiro([2, 3, 6, 7, 10, 1]));




// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function menorInteiro(array) {
  let menor = array[0];
  for (let index in array) {
    if (array[index] < menor) {
      menor = array[index]
    }
  }
  return array.indexOf(menor);
}
console.log(menorInteiro([2, 4, 6, 7, 10, 0, -3]));



// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function maiorPalavra(arrayDePalavras) {
  let maiorPalavra2 = "";
  for (let index = 0; index < arrayDePalavras.length; index++) {
    if (arrayDePalavras[index].length > maiorPalavra2.length) {
      maiorPalavra2 = arrayDePalavras[index];
    }
  }
  return maiorPalavra2
}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function maisRepetido(arrayDeInteiros) {
  let repeticao = 0;
  let auxMaisRepetido = 0;
  
  if (auxMaisRepetido == 0) {
    for (let index = 0; index < 1; index++) {
      for (let index2 = 0; index2 < arrayDeInteiros.length; index2++) {
        if (arrayDeInteiros[index] == arrayDeInteiros[index2]) {
          repeticao += 1
        }
      }
      auxMaisRepetido = arrayDeInteiros[index]
    }
  } 
  if (auxMaisRepetido > 0) {
    let auxRepeticao = 0;
    for (let index3 = 1; index3 < arrayDeInteiros.length; index3 ++) {
      for (let index4 = 0; index4 < arrayDeInteiros.length; index4++) {
        if (arrayDeInteiros[index3] == arrayDeInteiros[index4]) {
          auxRepeticao += 1
        }
      }
      if (auxRepeticao > repeticao) {
        auxMaisRepetido = arrayDeInteiros[index3];
        repeticao = auxRepeticao;
      }
      auxRepeticao = 0;
    }
  }
  return auxMaisRepetido
}

console.log(maisRepetido([2, 3, 2, 3, 3, 2, 3, 4, 4, 4, 4, 4]));

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function somatorio(numero) {
  let total = 0;
  for (let index = 1; index <= numero; index++) {
    total += index;
  }
  return total
}

console.log(somatorio(5));



// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

function verificaFimPalavra(palavraCompleta, fimPalavra) {
  let auxVerdade = null;
  for (let index = 1; index < fimPalavra.length+1; index += 1) {
    if (fimPalavra[fimPalavra.length-index] == palavraCompleta[palavraCompleta.length-index]) {
      auxVerdade = true
    }else {
      auxVerdade = false
      return auxVerdade 
    }
  }
  return auxVerdade
}  

console.log(verificaFimPalavra('trybe', 'ibe'));
