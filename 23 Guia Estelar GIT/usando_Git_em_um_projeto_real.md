# Iniciando um novo projeto

## Iniciando um novo projeto

Até agora aprendemos as bases do git, mas vamos ver como usar o git num projeto mais real.

Primeiramente acesse o site https://github.com/rocketseat-education, e busque pelo nlw-03-discovery e baixe como zip.

Ache o diretório e abra-o no terminal, e inicie um novo repositório com o comando git init, logo após, faça um git add . e por fim um git commit.


git init
(para cada projeto)


## Adicionando e verificando alterações

Nessa aula veremos sobre as modificações do nosso projeto, e como nós podemos ter melhores mensagens de modificação nos nossos commits.

git diff
(mostra as alterações, modificações)

git diff --color-words
(mostra apenas as palavras alteradas)

@@ -30,7 +30,9 @@
(aqui fala que por volta da linha trinta houve modificações)


## Staging e commits com atalho

Agora que pelo git status temos a noção de que o arquivo foi alterado, vamos commitá-lo.

Porém, como nós já temos todos os arquivos desse projeto no repositório, podemos pular a etapa do git add, já que após a modificação ele vai direto para a stage area, pois já é um arquivo rastreado e vamos fazer a execução do comando git commit com a opção -a, da seguinte forma:

git commit -am "lembre que podemos usar várias opções na mesma declaração"


git commit -am "modiffy index"
(ele pula o staged area, porque são arquivos que já estão no repositório)


## Ver modificações em diversos pontos da história

Nessa aula nos aprofundaremos nas modificações, em como vê-las e em tudo que já fizemos no histórico do projeto.

Podemos usar o comando git show e as letras iniciais da hash de um commit, da seguinte forma:

git show 7f121d7

Assim, veremos exatamente aonde essas mudanças ocorreram, e o que foi retirado ou adicionado, e podemos ser ainda mais específicos, usando a seguinte opção:

git show 7f121d7 --color-words

Essa opção vai nos permitir ver as palavras exatas que foram alteradas no nosso commit.

Podemos também ver as mudanças que houveram dentro de um diretório específico (nesse caso o diretório views, dentro do diretório src) através do --, usado da seguinte forma:

git show 7f121d7 -- src/views/*

Diferentemente do git diff, o git show serve como um atalho para mostrar exatamente o que há em um repositório em qualquer momento da história, enquanto o git diff vai apresentar as diferenças encontradas no working directory e stage area.


git show e4bfaf0df4d
(copio o código do commit que quero ver as modificações realizadas nele, e com esse código ele mostra)

SETA PRA CIMA repete o código anterior

git show e4bfaf0df4d --color-words
(mostra extamente as palavras modificadas)

git show e4bfaf0df4d -- src/views/*
(especifica qual o lugar pra ver as modificações, ou o lugar/past ou o arquivo)

git show e4bfaf0df4d -- src/views/index.hbs
(especifica qual o lugar pra ver as modificações, ou o lugar/past ou o arquivo)


## Ignorando arquivos e diretórios indesejados

Veremos aqui como fazemos para ignorar arquivos e diretórios que não queremos no nosso repositório, através do .gitignore.

O primeiro passo é criar o arquivo .gitignore, adicionar o nome do arquivo ou diretório que desejamos ignorar, e adicionar o nosso .gitignore ao nosso repositório, primeiro com o comando git add, e depois o git commit.

O seu .gitignore já foi para dentro do repositório e está pronto para rastrear os arquivos.

Caso tenha algum arquivo no seu repositório que você tenha adicionado ao .gitignore, como no exemplo do vídeo, o .DS_Store, apenas rode o comando abaixo:

git rm -r --cached .

Esse comando vai fazer o git parar de rastrear todos os arquivos, deixando-os no working directory apenas.

Após isso, executaremos o comando git add . que vai colocar todos os arquivos novamente na stage area, exceto os que serão ignorados pelo nosso .gitignore.

Depois, apenas fazemos um commit com uma mensagem que reflita o que fizemos.

vim .gitignore
(abre esse arquivo, que dentro dele preenchemos o que queremos que o GIT ignore)

node_modules/
(se quisermos que ignore, só colocar o nome da pasta ou arquivo dentro desse .gitignore)

node_modules/
(ignorando pasta sempre colocar /)


cd ../ 
(volta diretório)

cd git-aula
ls -al

vim .gitignore
(cria o arquivo que registra o que deve ser ignorado no GIT, só adicionar o nome)

:q!
(pra sair da edição de um arquivo sem alterar nada, só colocar :q!)


Adicionando no ignore, precisamos fazer um reset:

git rm -r --cached .
(tirar os arquivos que estão sendo rastreados)

git add .
git commit -m "ignoring files"

(nesse momento o file1.txt não faz mais parte do repositório)










