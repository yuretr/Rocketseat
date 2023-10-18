## Adicionando arquivos com git add

Falaremos nesse vídeo sobre como adicionar arquivos ao nosso repositório, você já deve ter compreendido, mas é sempre bom termos essa certeza, para não termos nenhuma dúvida do git add, certo?

Primeiramente temos o Working Directory, as vezes também chamado de working tree, é o local onde estamos trabalhando, mas não é aqui onde a magia ocorre, na verdade é na Stage Area, as vezes também chamada de Index ou ainda de Stage tree, é aqui onde seus arquivos vão ser preparados para poderem ser salvos no repositório, que é o banco de dados dos nossos arquivos, onde todos os nossos commits vão ser salvos.

Mas vamos começar pelo cenário de que nós temos um arquivo em uma pasta, que precisamos rastrear, antes de tudo vamos iniciar o git através do comando git init, assim que nosso diretório estiver pronto, vamos usar o comando git add + o nome do arquivo que queremos adicionar ao nosso Stage Area, mas também podemos fazer isso de outra forma, que é o comando git add .(ponto) , que vai levar todos os arquivos e pastas do nosso working directory ao stage area, o que não é recomendado, já que é melhor fazer uma série de pequenos commits, mas ainda é possível realizar um commit com quantos arquivos quisermos.

Uma outra maneira de adicionar múltiplos arquivos além do git add .(ponto), é possível adicionar arquivos por sua extensão, através do comando git add *.(extensão do arquivo).


git add *.md
(adiciona todos que são .md)


## Editando arquivos

Nessa aula aprenderemos a editar nossos arquivos, então, supondo que tenhamos editado nossos arquivos e não tenhamos feito a adição dele ao nosso stage area já modificado, podemos usar novamente o comando git add, ou seja, o git add serve tanto para adicionar novos arquivos ao nosso stage area, como também as modificações feitas nos nossos arquivos, que no nosso repositório vão virar outros commits.


press "q" pra sair do git log


## Modificações com git diff

As vezes estamos tão focados nas modificações dos nossos arquivos que nem nos lembramos de todas as modificações que foram feitas, e o git pode nos ajudar com isso.

Ao usar o comando git diff, ele nos mostra um registro das modificações feitas nos arquivos que já tínhamos guardados no nosso repositório, porém, em arquivos não rastreados pelo git, não será possível ver as alterações.

A ferramenta git diff é muito poderosa para ver a diferença entre os arquivos que temos no nosso repositório e no nosso working directory.


git diff
(mostra as alterações)

"-" remover linhas
"+" adicionou linhas

apertando a seta pra baixo, vai aparecendo as alterações


## Git diff staged

No último vídeo vimos como funciona o git diff, mas agora vamos ver o comando que usamos para ver as diferenças entre um arquivo que exista no stage area e no repositório, o git diff staged, que é basicamente a mesma coisa, funciona da mesma forma, porém vai comparar as modificações dos arquivos na stage area e no repositório, ao invés dos arquivos do working directory e do repositório.


git diff --staged
(mostra apenas as modificações no Staged)
(versões antigas era git diff --cached)


- diferença:

git diff
(WORKING DIRETORY vs REPOSITORY)

git diff --staged
(STAGEAREA vs REPOSITORY)


## Deletando arquivos

Caso queiramos deletar um arquivo através do git, podemos usar o comando a seguir:

git rm nomedoarquivo

(Atenção: caso delete algum arquivo que não esteja no repositório, ele se foi por toda a eternidade, então tome cuidado, pois ele não vai ser enviado para a lixeira.)


git add file2.txt
(que está deletado, na lixeira)

git restore --staged README.md
(restura o arquivo modificado)

git commit -m "delete file2.txt"
(remove ele, já estava como deletado no status)

git rm file1.txt
(ele é excluido diretamente sem passar pela lixeira, fica no Stage Area)

git commit -m "remove file1.txt"
(deleta o arquivo)


## Renomeando arquivos

Como renomear arquivos através do git.

Podemos renomear o arquivo manualmente, e se rodarmos o comando git status veremos que ele mostra o arquivo com nome antigo como removido, e o novo nome consta como não rastreado.

Podemos então usar o git rm (nome antigo), e git add (novo nome), e assim que rodarmos o git status novamente poderemos observar que ele consta agora como renamed (nome antigo) → (nome novo).

Podemos também fazer isso em um único passo, usando o comando git mv, cuja sintaxe é:

git mv nomeatual.txt novonome.txt

Ao rodar novamente o comando git status veremos que consta como renamed: nomeatual.txt → novonome.txt.


(se a gente altera o nome na mão, aparece no status arquivo deletado com o nome antigo, e um novo arquivo com o nome novo)

git rm working_directory.md
(remove o arquivo)

git add 1-working_directory.md
(adiciona o que foi renomeado)

git status
(aparece renamed: working_directory -> 1-working_directory)
(aparece que foi renomeado, o GIT percebe que é o mesmo arquivo)


git mv
(não precisa fazer as duas etapas para renomear)

git mv stage_area.md 2-stage_area.md
(renomeia de uma forma mais fácil)

git commit -m "alter filename"
(commit nos arquivos renomeados)


## Movendo arquivos

Também podemos mover arquivos através do git, usando o comando git mv, usado da seguinte forma:

git mv arquivoquevaimover nomedodiretório/arquivoquevaimover



mkdir sub
(cria diretório "sub")

se mover manualmente, vai aparecer no status o arquivo deletado, e um novo arquivo, que foi o que foi para o novo diretório


git mv README.md sub/README.md
(transfere o arquivo para o diretório)












