# Seção - 2 - GIT E GITHUB

Esse bloco pertence ao módulo de `fundamentos` do curso da [Trybe](https://www.betrybe.com/). Nesse bloco aprendi sobre os principais comandos do Git e Github, que serão utilizados durante todo o curso

Tendo isso em mente, neste README.md você encontrará duas tabelas com os principais comandos e seus significados. Além disso, todos os exercícios presentes daqui para a frente serão/foram enviados através da linha de comando com Git.

<br>

> ##  DIA 1

## O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre GIT.

Para tanto foi utilizado o terminal para criar repositórios locais e branchs, bem como adicionar mudanças em *staging* e posteriormente '*dar commit*' nelas. Por fim, as branchs foram '*mergeadas*'

---

<br>
<br>

## Comandos utilizados

Comandos|Significado
---|---
`git init`|transforma uma pasta em um repositório git
`git add` *nome do arquivo*|adiciona o arquivo especificado em *staging* (espaço temporário antes do *commit*)
`git add .`|adiciona todos os arquivos modificados em *staging*
`git status`|verifica o *status* dos arquivos do projeto
`git commit -m` '*mensagem*'|cria um ponto de acesso para a alteração e possui uma mensagem descrevendo quais alterações foram feitas
`git branch`|verifica as *branchs* existentes e mostra a *branch* atual
`git checkout -b` *nome da branch*|cria uma *branch* nova (a partir da atual) e alterna automanticamente para ela
`git checkout` *nome da branch*|alterna para a *branch* especificada
`git log`|mostra os registros dos *commits* (alterações realizadas)
`git merge` *nome da branch*|realiza a mesclagem das alterações da *branch* especificada


:exclamation: É uma boa prática *dar commits* ao longo do desenvolvimento do projeto, evitando o *comitão*  

<br>
<br>

> ## DIA 2

## O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre GIT E GITHUB.

Para tanto foi utilizado o terminal para clonar repositórios remotos, bem como enviar mudanças com o `push` e posteriormente recebe-las com o `pull request`.

---

<br>

## Comandos utilizados

Comandos|Significado
---|---
`git clone` *url do repositório*|clona um repositório remoto já inicializado para a máquina
`git remote -v`|verifica o repositório atual
`git add .`|adiciona todos os arquivos modificados em *staging*
`git status`|verifica o *status* dos arquivos do projeto
`git commit -m` '*mensagem*'|cria um ponto de acesso para a alteração e possui uma mensagem descrevendo quais alterações foram feitas
`git commit -am` *mensagem*|comando curto para unir git add e git commit (**não adiciona arquivos novos, apenas as modificações realizadas em arquivos existentes e realiza o commit**)
`git branch`|verifica as *branchs* existentes e mostra a *branch* atual
`git checkout -b` *nome da branch*|cria uma *branch* nova (a partir da atual) e alterna automanticamente para ela
`git checkout` *nome da branch*|alterna para a *branch* especificada
`git log`|mostra os registros dos *commits* (alterações realizadas)
`git pull`|traz as alterações que estão remotas da *branch* atual
`git pull origin` *nome da branch*|traz as alterações que estão remotas na *branch* especificada para a *branch* atual (que você está realizando modificações)
`git push -u origin` *nome da branch*|deixa a *branch* acessível remotamente e envia as alterações realizadas
git push
`git push`|envia as alterações realizadas na *branch* atual (quando a *branch* já está remota)
`git push --set-upstream origin` *nome da branch*|aparece quando o comando `git push` é feito e a *branch* ainda não está acessivel remotamente




:exclamation: É uma boa prática *dar commits* ao longo do desenvolvimento do projeto, evitando o *comitão*  

