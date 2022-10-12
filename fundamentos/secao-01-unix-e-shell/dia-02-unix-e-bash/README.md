# SEÇÃO 1 - DIA 2

## O objetivo dos exercícios desse dia foi colocar em prática o aprendizado sobre UNIX E BASH. 

### Para isso foram:
* listados, criados e exterminados processos
* listados e alterados direitos de acesso
* aninhados comandos com o uso do pipe `|`
* alterados os conteúdos dos arquivos com o uso do `>, >> e <`
---

## Comandos utilizados 
Comandos|Significados
---|---
*comando* `>` *arquivo*|redireciona a saída para um arquivo (cuidado para não sobrescrever)
*comando* `>>` *arquivo*|anexa saída padrão a um arquivo
*comando* `<` *arquivo*|redireciona a entrada padrão de um arquivo
*comando1* `|` *comando2*|canaliza a saída do *comando1* como entrada do *comando2*
`cat` *arquivo1* *arquivo2* `>` *arquivo0*|concatena *arquivo1* e *arquivo2* em *arquivo0*
`sort`|ordena dados
`who`|lista os usuários atualmente logados
`ls -lag`|lista direitos de acesso apra todos os arquivos
`chmod` *opcões* *arquivo*|altera os direitos de acesso para o arquivo nomeado
*comando* `&`|executa o *comando* em segundo plano
^C (Ctrl+c)|elimina o trabalho em execução em primeiro plano
^Z (Ctrl+z)|suspende o trabalho em execução em primeiro plano
`bg`|retorna processos que estão suspensos
`jobs`|lista processos suspensos e em segundo plano
`fg % 1`|reinicia o primeiro processo suspenso
`kill % 1`|encerra o primeiro processo suspenso
`ps`|lista processos atuais
`kill 26152`|encerra o processo de número 26152

## Comandos extras excelentes que precisam instalar apps
Comando|Significado
---|---
`cmatrix`|abre o terminal da matrix
`sl`|aparece a locomotiva
`cowsay` *frase*|aparece uma vaca falando a frase
`telnet towel.blinkenlights.nl`|pegue a pipoca para assistir Star Wars
`rev`|após executar o comando escreva algo e observe como fica de trás para frente

[para saber como instalar](https://canaltech.com.br/linux/11-comandos-divertidos-e-inuteis-para-usar-no-linux/)

