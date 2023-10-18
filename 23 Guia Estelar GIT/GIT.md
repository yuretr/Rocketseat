# GIT

- Você precisa modificar algo no seu projeto sem perder o já havia feito
- Caso queira salvar/arquivar seu código
- Tenha medo de queimar seu computador ou de corromper seu arquivo
- Caso esteja trabalhando em um projeto, mas precisa de uma alteração, da qual se arrepende e precisa voltar atrás


## Controle de versão

- Se mais tarde precisar de alguma versão anterior, o controle de versão ajuda nessa necessidade
- Ver quem modificou, ou quando
- VCS - Version Control System

Sistema Local
- No próprio computador
- Muito propenso a erros
- Em algumas máquinas temos o RCS que auxilia para revisar os arquivos e evitar erros
- RCS - Revision Control System
- Não é fácil trabalhar em grupo no mesmo projeto

Sistema Centralizado
- Fica em um única servidor
- Grupo consegue colaborar no desenvolvimento
- Se o servidor cair, não conseguimos trabalhar no projeto
- Caso tenha problemas no disco, e não tenha BKP, pode ocasionar problemas

Sistemas Distribuídos
Exemplo: Git, Mercurial, Bazaar ou Darcs
- Duplicar, clonar localmente, cada máquina trabalhando no projeto terá um clone do repositório
- Qualquer servidor morrer, tem cópia local em todos os computadores que trabalha no projeto
- Servidor remoto consegue usar as versões mais recentes
- Caso não tenha internet, com a cópia local conseguimos trabalhar e posteriormente subir em Nuvem as alterações


## GIT

- Open-source
- Pontos na história (commit, viagem no tempo)
- Histório de alterações no código
- Controlar fluxo de novas funcionalidades (implementações do time)
- Ramificações: branch (universos paralelos)
- Vários devs no mesmo projeto
- Análise e resolução de conflitos


    cd Documents/GitHub/Treinamento
    (acessa o diretório)

    lt -al .git
    (vê a listagem de todos os documentos do diretório git)


## O primeiro commit

Nesta aula iremos criar nosso primeiro commit, nosso primeiro ponto na história.

Primeiro iremos preparar nosso arquivo para isso, através do comando add, usado da seguinte forma:

git add .

O . nesse caso serve para selecionarmos todos os arquivos dentro do diretório.

Assim que tivermos executado esse comando, podemos criar nosso commit, da seguinte forma:

git commit -m "mensagem do commit, é obrigatória, então não se esqueça!"

E assim criamos nosso primeiro ponto na história!

    git add
    git commit -m "mensagem"
    (processo que fará muitas vezes)


## Git log

Assim que rodar o comando no seu projeto, verá que temos uma hash, do tipo SHA-1, e também teremos entre parênteses o nosso branch, nesse caso o master, e no commit (sua hash), teremos o autor do commit, a data do mesmo e a mensagem do commit.

Caso queiramos um resultado menor desse comando, podemos usar a opção --oneline, da seguinte forma:

git log --oneline

Ele vai encurtar a hash, retirar o autor, a data e exibir a mensagem do commit ao lado.

Suponhamos que você tem 50 commits, e precisa apenas dos últimos 5, nesse caso, rode o comando a seguir:

git log -n 5

Ou seja, apenas coloque o argumento -n e a quantidade dos últimos commits que deseja.

Caso queira ver os commits após uma data específica, utilize o argumento --since, da seguinte forma:

git log --since=aaaa-mm-dd

Já caso queira os commits antes de uma data específica, use o argumento --until, da seguinte forma:

git log --until=aaaa-mm-dd

Você também pode aplicar um filtro para o autor do commit, para procurar os commits de uma pessoa em específico, usando o argumento --author, utilizado da seguinte forma:

git log --author=nomedoautor(nao precisa ser completo)

Também temos a forma mais poderosa de se utilizar o git log que é com o argumento grep, usado da seguinte forma:

git log --grep="o que quer que esteja buscando, ex: bugfix"

Basicamente significa expressão regular global, é muito comum na programação, e vai ser usado para buscar na mensagem do commit o que quer que você esteja buscando.


## Estágios do arquivo

Veremos nesta aula sobre os três estados dos arquivos dentro do git.

Para podermos iniciar um projeto, colocamos o git init (ou git clone, caso queiramos copiar os arquivos de outro repositório, mas veremos isso mais adiante), após isso, o git vai iniciar um repositório local, fazendo com que nosso arquivos fiquem no Working Directory, a primeira etapa do processo. Após isso, faremos o git add, que nos coloca na Stage Area, a segunda etapa do processo, e finalmente faremos um commit, para levar nossos arquivos até o repositório local.

O working Directory é o diretório no qual se encontra nosso projeto, então os arquivos são preparados para serem commitados, a Stage Area, onde nosso arquivos ficam preparados, para podermos enfim criarmos o nosso commit, e é a partir desse ponto em que nosso arquivo fica salvo como um ponto na história


## Git Workflow

Nessa aula falaremos sobre como funciona o workflow do git, que vimos na aula passada, onde criamos o primeiro arquivo, passamos pela stage area, e adicionamos ao repositório.

Primeiramente suponhamos que temos um arquivo, e nós o preparamos através do git add. Isso significa que ele teve uma cópia de si feita, e essa cópia foi enviada para a nossa stage area, então temos dois arquivos, onde podemos trabalhar em nosso working directory, enquanto nossa versão no stage area continua a mesma, podendo ter duas versões diferentes do nosso arquivo.

Podemos então colocar ele no nosso repositório local, através do comando git commit, onde criamos um ponto na história, onde temos nosso arquivo naquele momento do tempo.

Agora faremos uma alteração nesse arquivo, e teremos então o arquivo (v2), e faremos o mesmo processo para ele, passando para o stage area, e iniciando um commit, então no nosso repositório teremos a v1 e a v2, a v2 ficando por último, visto que é uma linha do tempo, então podemos criar a v3 e fazer o mesmo processo, criar a v4 e repetir, e nós teremos todas as versões do nosso arquivo salvas dentro do nosso repositório.

Podemos voltar atrás em todas as versões dos arquivos, porém a numeração não será bonitinha, teremos que usar a hash, sobre a qual falaremos na próxima aula.


## Hash SHA-1

Nessa aula, falaremos sobre o nome dado à cada commit, que é dado através de uma hash chamada SHA-1.

A cada commit que criamos, o git vai gerar um checksum, que converte os dados da nossa operação em um número, o que garante a integridade dos nossos dados. Essa hash é uma linha de 40 caracteres hexadecimais.

Dentro dessa string existe uma snapshot, que mostra o autor, o pai e a mensagem do nosso commit.

O pai do commit é o commit do qual ele foi criado, então o nosso primeiro commit sempre terá um valor nulo, enquanto os próximos terão o valor do commit anterior a ele.


## HEAD

No git, a HEAD é um ponteiro, que nos aponta em que ponto da história estamos, em qual commit nós estamos, e nas próximas aulas veremos como fazer para irmos em outros pontos na história, outros commits.

(Não é necessário entender as minúcias de como o git funciona, precisamos entender como funciona, não todos os detalhes exatos de todo o funcionamento do git. Nosso foco tem de ser em como fazê-lo uma ferramenta da qual possamos usar no nosso dia-a-dia, certo?)


## Revisão Prática

init / clone

WORKING DIRETORY  -- add -->  STAGEAREA  -- commit --  LOCAL REPOSITORY


// ------------------------

cd Documents

mkdir git-aula
(criar diretório)

cd git-aula
(entrar no repositório)

git init
(iniciar projeto, cria o repositório oculto)
(está no Working Diretory)

touch file1.txt
(criar arquivo 1)

git status
(mostra o status que está)

clear
(limpar)

touch file2.txt
(criar arquivo 1)

git status
(mostra o status que está)

git add file1.txt
(adicionar no Stage Area)

clear
(limpar)

git status
(mostra o status que está)
(file1.txt - nesse caso conseguimos ver um arquivo pra ser committed, Stage Area)
(file2.txt - outro arquivo em Working Diretory)

git add .
(adicionar tudo ao próximo passo, Stage Area)

git rm --cached file2.txt
(retorna um passo, removido do Stage Area)

git commit -m 'initial commit'
(passa os arquivos do Stage Area para o Local Repository, Commited)

git log
(consigo ver as informações do commit)

git add file2.txt

git commit -m "second commit"

git log
(mostra os dois arquivos commit)


vim file1.txt
(modificações no arquivo)

press "i", escrevi "texto", press "esc", escrevi :wq, enter alterado

git status
(mostra que tem um arquivo modificado, no caso file1.txt)

git add file1.txt
(adiciona o arquivo modificado no Stage Area)

git commit -m 'change file1'
(adiciona o arquivo modificado no commit)

git log
(mostra os arquivos adicionados e modificados commit)


// ------------------------

