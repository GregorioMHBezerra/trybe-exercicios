# Seção - 1 - UNIX E SHELL

Esse bloco pertence ao módulo de `fundamentos` do curso da [Trybe](https://www.betrybe.com/). Nesse bloco aprendi sobre os principais comandos da linha de comando do UNIX.


> ## DIA 1

## O objetivo dos exercícios desse dia foi colocar em prática o aprendizado sobre UNIX E BASH. 

Para isso foram criados arquivos e diretórios pela linha de comando, que foram manipulados e sob os quais foram realizadas buscas.

---
<br>

### Comandos utilizados 

Comando|Significado
---|---
ls|lista arquivos e diretórios
ls -a|lista todos os arquivos e diretórios
mkdir|cria um diretório
cd *diretório*|muda para o diretório nomeado
cd|muda para o diretório inicial
cd ~|muda para o diretório do usuário
cd ..|muda para o diretório pai
pwd|mostra o caminho do diretório atual
cp *arquivo1* *arquivo2*|copia o *arquivo1* e cria o *arquivo2* com o conteúdo do *arquivo1*
mv *arquivo1* *arquivo2*|move ou renomeia o *arquivo1* para o *arquivo2*
rm *arquivo*|remove um arquivo
rmdir *arquivo*|remove um diretório vazio
cat *arquivo*|exibe um arquivo
less *arquivo*|exibe um arquivo em páginas
head *arquivo*|exibe as primeiras linhas de um arquivo (o padrão é 10)
tail *arquivo*|exibe as últimas linhas de um arquivo (o padrão é 10)
grep *'palavras-chave'* *arquivo*|procura por palavras chave no arquivo
wc *arquivo*|conta o número de linhas/palavras/caracteres no arquivo
*|corresponde a qualquer número de caracteres
?|corresponde a um caracter
man *comando*|exibe o manual do comando
whatis *comando*|exibe uma breve descrição do comando
apropos *'palavras-chave'*|corresponde a comandos com  palavras-chave em suas páfinas de manual

<br>

> ## DIA 2

## O objetivo dos exercícios desse dia foi colocar em prática o aprendizado sobre UNIX E BASH. 

### Para isso foram:
* listados, criados e exterminados processos
* listados e alterados direitos de acesso
* aninhados comandos com o uso do pipe `|`
* alterados os conteúdos dos arquivos com o uso do `>, >> e <`   

---
<br>


### Comandos utilizados 
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


