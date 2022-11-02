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

primeiroElemento.children[1].firstElementChild.innerText = 'olá';



console.log(primeiroElemento.firstElementChild);
console.log(primeiroElemento.children[1].previousElementSibling);
console.log(primeiroElemento.children[1].nextSibling);
console.log(primeiroElemento.children[1].nextElementSibling);
console.log(primeiroElemento.children[2]);