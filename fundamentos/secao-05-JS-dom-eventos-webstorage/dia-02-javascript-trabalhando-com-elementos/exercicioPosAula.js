let body = document.getElementsByTagName('body')[0];


// 1 - Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
function createH1() {
  const createTagClass = document.createElement('h1');

  createTagClass.innerText = 'Exercício - JavaScript DOM'

  body.appendChild(createTagClass);
};

createH1();

// 2-  Adicione a tag main com a classe main-content como filho da tag body;
const createTagMain = function () {
  const createTagMain = document.createElement('main');

  createTagMain.setAttribute('class', 'main-content');

  body.appendChild(createTagMain);

};


createTagMain();

// 3- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

// let main = document.getElementsByTagName('main')[0];

const createTagSection = function () {
  const createTagSection = document.createElement('section');

  createTagSection.className = 'center-content';

  document.getElementsByTagName('main')[0].appendChild(createTagSection);
};

createTagSection();


// 4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

function createTagP(tagPai, indice, texto) {
  const createTagP = document.createElement('p');

  createTagP.innerText = texto;

  document.getElementsByTagName(tagPai)[indice].appendChild(createTagP);
}

createTagP('section', 0, 'imagem');



// 5- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const createTagSection2 = function () {
  const createTagSection = document.createElement('section');

  createTagSection.className = 'left-content';

  document.getElementsByTagName('main')[0].appendChild(createTagSection);
};

createTagSection2();


// 6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const createTagSection3 = function () {
  const createTagSection = document.createElement('section');

  createTagSection.className = 'right-content';

  document.getElementsByTagName('main')[0].appendChild(createTagSection);
};

createTagSection3();




// 7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const createTagImg = function () {
  const createTagImg = document.createElement('img');

  createTagImg.src = 'https://picsum.photos/200'
  createTagImg.setAttribute('class', 'small-image');

  document.getElementsByClassName('center-content')[0].appendChild(createTagImg);
};

createTagImg();


// 8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const createTagUl = () => {
  const arrayNumeros = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito','nove', 'dez'];
  
  let createTagUl = document.createElement('ul');
  document.getElementsByClassName('right-content')[0].appendChild(createTagUl);
  
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    const element = document.createElement('li');
    
    element.innerText = arrayNumeros[index];
    
    createTagUl.appendChild(element);
  }
};
createTagUl();


// 9-  Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
// 11- Adicione a classe description nas 3 tags h3 criadas;

const createTagH3 = () => {
  for (let index = 0; index < 3; index += 1) {
    const createTagH3 = document.createElement('h3');
    document.getElementsByTagName('main')[0].appendChild(createTagH3);
    createTagH3.setAttribute('class', 'description');
}}

createTagH3();

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// Adicione a classe title na tag h1 criada;

document.getElementsByTagName('h1')[0].className = 'title';



// Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

const main = document.getElementsByTagName('main')[0];
const leftContent = document.getElementsByClassName('left-content')[0];
main.removeChild(leftContent);

// Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

const sectionRight = document.getElementsByClassName('right-content')[0];
sectionRight.style.margin = 'auto';

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde; (optei por trocar a cor da main)

main.style.backgroundColor = 'darkred';

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

const removerLi = document.getElementsByClassName('right-content')[0].firstElementChild;
removerLi.lastElementChild.remove();
removerLi.lastElementChild.remove();