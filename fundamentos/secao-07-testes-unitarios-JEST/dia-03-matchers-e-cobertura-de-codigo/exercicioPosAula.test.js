// 🚀 Exercício 3
// Complementando o teste da função acima que valida a entrada de parâmetro, você pode utilizar o matcher toMatch() para validar a resposta da função.

// Verifique se a resposta contém a informação Boas vindas,, antes de chamar o nome da personagem;
// Verifique se a resposta contém o nome correto da personagem.


// printMessageTest.test.js
const { info } = require('./printMessage.js');

describe('Exercício de teste seção 7.3', () => {
  it('teste objeto info', () => {
    expect(info).toHaveProperty('personagem');
  });
  // implemente seus testes aqui
})