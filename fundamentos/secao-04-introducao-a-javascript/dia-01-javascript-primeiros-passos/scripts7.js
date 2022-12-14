// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const num1 = 1;
const num2 = 5;
const num3 = 3;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
  console.log(true)
} else {
  console.log(false)  
}

// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const num4 = 2;
const num5 = 4;
const num6 = 6;

if (num4 % 2 != 0 || num5 % 2 != 0 || num6 % 2 != 0) {
  console.log(true)
} else {
  console.log(false)
}


// Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);

const compra = 70;
const venda = 85;

if (compra < 0 || venda < 0) {
  console.log('Erro, os valores informados devem ser maiores ou iguais a 0')

} else {
  let lucro = (venda - compra * 1.2)
  console.log(`o lucro obtido foi de ${(Math.round(lucro)).toFixed(2)}R$`)
}



// Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
        // Salário bruto até R$ 1.556,94: alíquota de 8%
        // Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
                  // Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
                  // Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
        // Até R$ 1.903,98: isento de imposto de renda
        // De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
        // De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
        // De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
        // Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
    // Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
    // O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
    // Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
    // Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
    // R$ 2.670,00: salário com INSS já deduzido;
    // 7.5%: alíquota de imposto de renda;
    // R$ 142,80 parcela a se deduzir do imposto.
    // Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
    // O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
    // Resultado: R$ 2.612,55.

let salarioBruto = 4000;
let salarioLiquido = null;
let inssAliquota = 0.08;
let inssValor = null
let irAliquota = 0;
let irDesconto = 0;

if (salarioBruto < 1556.95) {
  salarioLiquido = salarioBruto - salarioBruto * inssAliquota
  console.log(`${salarioLiquido}`)

} else if (salarioBruto >= 1556.95 && salarioBruto < 2594.93) {
  inssAliquota = 0.09
  salarioLiquido = salarioBruto - salarioBruto * inssAliquota
  if (salarioLiquido <= 1903.98) { 
    console.log(`${salarioLiquido}`)
  } else if (salarioLiquido >= 1903.99 && salarioBruto <= 2826.65) {
    irAliquota = 0.075
    irDesconto = 142.80
    salarioLiquido = salarioLiquido - (salarioLiquido * irAliquota - irDesconto)
    console.log(`${salarioLiquido}`)
  } else if (salarioLiquido >= 2826.66 && salarioBruto <= 3751.05) {
    irAliquota = 0.15
    irDesconto = 354.80
    salarioLiquido = salarioLiquido - (salarioLiquido * irAliquota - irDesconto)
    console.log(`${salarioLiquido}`)
  } else if (salarioLiquido >= 3751.06 && salarioBruto <= 4664.68) {
    irAliquota = 0.225
    irDesconto = 636.13
    salarioLiquido = salarioLiquido - (salarioLiquido * irAliquota - irDesconto)
    console.log(`${salarioLiquido}`)
  } else {
    irAliquota = 0.275
    irDesconto = 869.36
    salarioLiquido = salarioLiquido - (salarioLiquido * irAliquota - irDesconto)
    console.log(`${salarioLiquido}`)
  }
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  inssAliquota = 0.11
  salarioLiquido = salarioBruto - salarioBruto * inssAliquota
  if (salarioLiquido <= 1903.98) { 
    console.log(`${salarioLiquido}`)
  } else if (salarioLiquido >= 1903.99 && salarioBruto <= 2826.65) {
    irAliquota = 0.075
    irDesconto = 142.80
    salarioLiquido = salarioLiquido - (salarioLiquido * irAliquota - irDesconto)
    console.log(`${salarioLiquido}`)
  } else if (salarioLiquido >= 2826.66 && salarioBruto <= 3751.05) {
    irAliquota = 0.15
    irDesconto = 354.80
    salarioLiquido = salarioLiquido - (salarioLiquido * irAliquota - irDesconto)
    console.log(`${salarioLiquido}`)
  } else if (salarioLiquido >= 3751.06 && salarioBruto <= 4664.68) {
    irAliquota = 0.225
    irDesconto = 636.13
    salarioLiquido = salarioLiquido - (salarioLiquido * irAliquota - irDesconto)
    console.log(`${salarioLiquido}`)
  } else {
    irAliquota = 0.275
    irDesconto = 869.36
    salarioLiquido = salarioLiquido - (salarioLiquido * irAliquota - irDesconto)
    console.log(`${salarioLiquido}`)
  }
} else if (salarioBruto > 5189.82) {
  inssValor = 570.88
  salarioLiquido = salarioBruto - inssValor
  if (salarioLiquido <= 1903.98) { 
    console.log(`${salarioLiquido}`)
  } else if (salarioLiquido >= 1903.99 && salarioBruto <= 2826.65) {
    irAliquota = 0.075
    irDesconto = 142.80
    salarioLiquido = salarioLiquido - (salarioLiquido * irAliquota - irDesconto)
    console.log(`${salarioLiquido}`)
  } else if (salarioLiquido >= 2826.66 && salarioBruto <= 3751.05) {
    irAliquota = 0.15
    irDesconto = 354.80
    salarioLiquido = salarioLiquido - (salarioLiquido * irAliquota - irDesconto)
    console.log(`${salarioLiquido}`)
  } else if (salarioLiquido >= 3751.06 && salarioBruto <= 4664.68) {
    irAliquota = 0.225
    irDesconto = 636.13
    salarioLiquido = salarioLiquido - (salarioLiquido * irAliquota - irDesconto)
    console.log(`${salarioLiquido}`)
  } else {
    irAliquota = 0.275
    irDesconto = 869.36
    salarioLiquido = salarioLiquido - (salarioLiquido * irAliquota - irDesconto)
    console.log(`${salarioLiquido}`)
  }
}