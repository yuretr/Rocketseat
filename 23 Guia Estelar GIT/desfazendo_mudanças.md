## Desfazendo modificações

Como reverter alterações que foram feitas no seu arquivo, que você possa ter feito sem querer e ter salvo no seu editor.

Apenas rode o comado a seguir:

git restore nomedoarquivo

Esse comando vai fazer com que as alterações sejam descartadas, ao pegar uma versão anterior do arquivo no seu repositório.


git restore 3-repository.md
(restaura o arquivo após uma modificação)

cat 3-repository.md
(mostra o conteúdo escrito no arquivo)


## Trazendo de volta do staged

Nesta aula veremos como desfazer alguma alteração que foi ao nosso stage area, e na verdade é bem simples, usamos o comando a seguir:

git restore --staged nomedoarquivo

Há também outra forma, que é no caso de termos múltiplos arquivos, e é usado da seguinte forma:

git restore --staged .

Podemos rodar o comando git status para conferir a remoção do(s) arquivo(s) do stage area.


git restore --staged .DS_store
(arquivo ".DS_store" ta pronto pro commit, está no staged, com esse comando tira do staged)

git reset HEAD .DS_store
(outro código que faz a mesma coisa, comando antigo)

git restore --staged .
(restaura tudo que está no staged)


## Corrigindo o último commit

Caso queiramos alterar algo de importante no nosso mais recente commit, como a mensagem, vamos usar uma opção do comando commit, que é a --amend, dessa forma:

git commit --amend -m "nova mensagem"

O git commit --amend também serve para modificar o conteúdo do commit, podendo servir para remover arquivos ou adicionar novos arquivos mas apenas válidos para o último commit, não tente modificar outros commits, pois isso é algo muito avançado e vai ser uma grande dor de cabeça.


git commit --amend -m "subpast new"
(amend significa corrigir)
(isso altera o nome do ultimo commit)
(muda a numeração do commit com qualquer alteração)

(--amend, corrigir)
(-m, mensagem)


retirar um arquivo já commit:

ls -al
(mostra todos os arquivos)

git rm .DS_Store
(remove o arquivo ".DS_Store")

git add .
(adiciona essa alteração ao staged)

git commit --amend
(mensagem não precisa mudar, só correção)

:wq
(ele vai predir a mensagem, só dar esse comando que será a mesma mensagem, se der um git log, permanecerá igual a ultima mensagem)


## Recuperando arquivos

Podemos recuperar nossos commits antigos usando o comando git checkout.

Primeiramente usamos o git log para encontrar o commit que precisamos, e copiamos os primeiros caracteres da hash, após isso, podemos rodar o comando, da seguinte forma:

git checkout HASH -- nomedoarquivo

(Cuidado, caso haja um arquivo de mesmo nome e formato, será inteiramente substituído, fazendo com que você precise pegar a versão mais recente num último commit)


git checkout 841404dcc -- 1-working_directory.md
(checkout, recupera)
(essa numeração é do commit que deseja voltar)

git commit -m "recovery 1-working_directory.md"
(commit no arquivo recuperado)

(podemos escolher a numeração do commit e recupera de qualquer momento da história)


## Removendo arquivos não rastreados

Veremos nesse vídeo como remover um ou mais arquivos não rastreados.

O comando git clean vai deletar tudo que não está rastreado no seu master branch, mas cuidado, ele será apagado para sempre, não será possível recuperá-los, pois não vão para um lixeira.

Caso queira confirmar o que o comando vai fazer use a opção -n, que vai mostrar os arquivos que o git vai apagar.


touch trash1.txt trash2.txt
(arquivos não rastreaveis)

git clean -f
(remover pra sempre tudo que não estiver rastrável, não consigo achar mais em lugar algum)


## Revertendo um commit

Agora veremos como reverter um commit, como pegar um ponto antigo da história, revertê-lo e adicionar um novo ponto.

O primeiro passo é ter um diretório limpo, sem nenhum arquivo não rastreado, sem nada na stage area.

Usaremos então o comando git log, e onde nossa HEAD estiver, a cada commit subtrairemos 1, então, considere o commit atual como 0, o abaixo desse -1, o abaixo desse -2 e por aí vai.

Use o comando git revert, mas ao invés de um sinal de menos(-), use um til (~), da seguinte maneira:


git revert HEAD~6
(volta em um ponto da história, no caso o 6° commit)

(nesse caso eu tive que dar git add . , e depois git commit -m, e :wq)

git log
(mostra que foi restaurado os arquivos do commit 6°)


outra forma:

git log --oneline
(nesse caso posso copiar o número rest)
(por exemplo: b6dd1a0)

git revert b6dd1a0
(vai trazer de volta os arquivos do commit)

