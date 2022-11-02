// Acesse o elemento elementoOndeVoceEsta.
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai.
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de pai.

const primeiroElemento = document.getElementById('elementoOndeVoceEsta').parentNode;
primeiroElemento.style.backgroundColor = 'red';

primeiroElemento.children[1].firstElementChild.innerText = 'olá2';



console.log(primeiroElemento.firstElementChild);
console.log(primeiroElemento.children[1].previousElementSibling);
console.log(primeiroElemento.children[1].nextSibling);
console.log(primeiroElemento.children[1].nextElementSibling);
console.log(primeiroElemento.children[2]);

// Crie um irmão para elementoOndeVoceEsta.
// Crie um filho para elementoOndeVoceEsta.
// Crie um filho para primeiroFilhoDoFilho.
// A partir desse filho criado, acesse terceiroFilho.

//captura o elemento pai e coloca ela numa variável
let sectionPai = document.getElementById('pai');

//cria um elemento section com um h1 dentro
let criarSection = document.createElement('section');
criarSection.innerHTML = '<h1> Olá </h1>'


//adiciona o elemento section criado como filho da váriável que captura o id PAI
sectionPai.appendChild(criarSection);


//captura o id e coloca na variável
let sectionElementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');


//adiciona uma section como filho do elemento capturado
sectionElementoOndeVoceEsta.appendChild(criarSection);

//outra forma de fazer sem precisar capturar e jogar numa variável
    // document.getElementById('elementoOndeVoceEsta').appendChild(criarSection);


// adiciona uma section ao primeiro elemento filho do elemento capturado e atribuido a variável    
sectionElementoOndeVoceEsta.firstElementChild.appendChild(criarSection).setAttribute('id', 'tentativa');

console.log(document.getElementById('tentativa').parentNode.parentNode.nextElementSibling);