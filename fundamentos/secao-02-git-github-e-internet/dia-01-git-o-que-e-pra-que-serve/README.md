# SEÇÃO 2 - DIA 1

## O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre GIT.

Para tanto foi utilizado o terminal para criar repositórios locais e branchs, bem como adicionar mudanças em *staging* e posteriormente '*dar commit*' nelas. Por fim, as branchs foram '*mergeadas*'
---

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
