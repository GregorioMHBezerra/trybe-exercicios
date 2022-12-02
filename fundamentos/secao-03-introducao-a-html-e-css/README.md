# Seção - 3 - INTRODUÇÃO AO HTML E CSS 

Esse bloco pertence ao módulo de `fundamentos` do curso da [Trybe](https://www.betrybe.com/). Nesse bloco aprendi sobre o básico de HTML e CSS, como as tags semânticas do HTML e seu uso correto visando a acessibilidade, os seletores e posicionamentos do CSS, o conceito de herança e classes, pseudoclasses e pseudoelementos. 

Tendo isso em mente aqui você encontrará os exercícios que desenvolvi para fixar os conhecimentos que adquiri ao longo desse bloco. Além disso também desenvolvi o projeto ao final de bloco para avaliar tudo o que havia aprendido, você pode acessá-lo [aqui](https://github.com/GregorioMHBezerra/Lessons-Learned-Trybe).


> ## DIAS 1 E 4

## O objetivo dos exercícios desses dias foi colocar em prática o que havia aprendido sobre HTML e entender seu funcionamento de acordo com o modelo cliente-servidor e a semântica das Tags.

Para tanto entendi de forma simples como a internet funciona, bem como seu modelo Cliente & Servidor e suas partes.
Aprendi também a estruturar páginas web com HTML utilizando as tags html, head e body, de maneira a estruturar os textos, títulos, criar listas, links, adicionar imagens e utilizar a semântica das Tags.

---

## Tags utilizadas

Tags|Significado|dicas
---|---|---
`<html>`| raiz do documento da qual todas as outras tags descendem | na abertura desta tag que coloca a linguagem. ex: `lang='pt-br'`
`<head>`| tag dos metadados, onde se coloca os links para CSS externo e título da aba | há possibilidade de colocar o link para `script.js`
`<body>`| tag do corpo da página (conteúdo que aparecerá para o usuário)| Aqui pode-se colocar também o `script.js` ao final
`<header>`| tag para cabeçalho/introdução da página| geralmente utiliza-se a tag `<nav>` aqui para o menu de navegação
`<nav>`| seçao da página que redireciona para outras páginas ou outras áreas da mesma página | Caso opte pelo `target='blank` evidenciar isso textualmente para os leitores de página. Para mais informações: [Acessibilidade](https://www.w3.org/TR/WCAG20/#perceivable)
`<main>`| tag para o conteúdo principal da página | Aqui geralmente vão as tags `<aside>, <article>, <section>` contendo as demais tags
`<aside>`|tag com conteúdo tangecialmente relacionado ao conteúdo principal | são as barras laterais das páginas
`<footer>`| tag de rodapé | pode ser usada para rodapé de qualquer outra tag
`<article>`| tag com conteúdo de composição independente | um cartão de visitas, por exemplo
`<section>`| tag sem semântica e genérica|
`<p>`| tag para parágrafos|
`<img>`| tag para imagens |
`<a>`| tag para links |
`<strong>`| tag para marcar uma parte textual como forte | substitue o `<b>`

:exclamation: É uma boa prática passar o html pelo [*CodeSniffer*](https://squizlabs.github.io/HTML_CodeSniffer/) para corrigir eventuais falhas do ponto de vista da acessibilidade.  

> ## DIAS 2 E 3

## O objetivo dos exercícios desses dias foi colocar em prática o que havia aprendido CSS.

Para tanto aprendo a criar regras de estilo para tags HTML utilizando o CSS, utilizar os seletores de `tag`, `id` e `class` para aplicar regras de CSS, alterar características da fonte e das cores de páginas web, utilizar CSS inline e externo, compreender como funciona o Box Model do CSS e como os elementos da página se relacionam visualmente, posicionar elementos na página de diferentes formas, combinar e agrupar seletores de CSS para criar regras bem definidas.

---

## Comandos utilizados

Seletores e atributos|Significado|dica
---|---|---
`@charset "UTF-8";`| Colocar ao início do `arquivo.css`| Essa prática evita problemas com caracteres especiais
`.class`| seletor para as tags com uma classe específica |
`#id`| seletor para uma tag com um id específico |
`tag`| seletor da tag pelo nome |
`background-color:`| altera a cor de fundo |
`color:`| altera a cor das letras |
`font-family:`| altera a fonte |
`font-size:`| altera o tamanho da fonte |
`font-weight:`| altera o peso da fonte (fica mais ou menos larga) |
`text-align`| altera o alinhamento do texto | aqui se justifica o texto
`text-decoration`| altera a decoração do texto | aqui se coloca sublinhado
`font-style`| altera o estilo do texto | aqui se coloca itálico

<!-- colocar ainda o display, width, height, padding, border, margin, absolute, float, pseudoclasses (:hover), transition, pseudoelementos-->


