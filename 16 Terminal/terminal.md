# O que é Command Line?

Nesta aula, veremos o que é Command Line, começando pela GUI, ou Graphical User Interface, a Interface Gráfica do Usuário, a forma grafica de mostrar as informações, porém temos uma outra forma de mostrar o que acontece com o computador, a CLI, ou Command Line Interface, ou Interface de Linha de Comando, onde se podem enviar comandos e ver seus resultados, ou seja, é possível operar a máquina apenas com textos, não sendo necessária uma interface gráfica. Para isso usamos o shell, também chamado de interpretador, que é o ambiente, responsável por executar os comandos, e além disso, ele conversa diretamente com o kernel, simplificando, O terminal vai receber os comandos, que serão executados no shell, que os levarão ao kernel, onde todo o processamento desses comandos ocorre.

GUI - Graphical User Interface

CLI - Command Line Interface


# Sintaxe

Command -> Option(s) -> Arguments


# Tab Completion

O Tab Completion pode ser usado tanto nos comandos quanto nos argumentos, ele é básicamente uma ferramenta de busca de comandos, ativada a partir da tecla Tab, no caso dos argumentos, ele vai listar todas as pastas, arquivos e diretórios disponíveis no caminho.

exemplo: escrevo "l" , e aperto TAB, ele vai mostrar as opções disponíveis


# Atalhos

Nesta aula, serão retratados alguns atalhos que você pode usar para o seu terminal Hyper, atenção, pois dependendo do terminal, e do ambiente (Windows, Mac, Linux), ele pode funcionar diferentemente.

Um dos atalhos são as setinhas do seu teclado, sendo;

Up - Down: vê seus comandos anteriores
Ctrl + setas: pula as palavras (Mac option + setas)
E também o Ctrl;

Ctrl + A: vai para o início da linha
Ctrl + E: vai para o final da linha
Ctrl + U: limpa a linha
Ctrl + K: apaga tudo na linha até onde o cursor está posicionado
Ctrl + L: clear, limpa o terminal (CMD + K para Mac)


# Hyper

Tutorial de como ter um terminal boladão. Primeiramente, faça o dowload do hyper através do link https://hyper.is e complete a instalação. Em seguida acesse a página a seguir e siga as instruções: https://blog.rocketseat.com.br/terminal-com-oh-my-zsh-spaceship-dracula-e-mais/



# Conseguindo ajuda

Você não precisa memorizar tudos os comandos, mas é importante saber inglês, pois vamos aprender a usar o manual dos comandos, que é utilizado o prefixo man e um comando de sua escolha, por exemplo:

man ls
Onde obteremos uma descrição de o que o comando ls faz, e ao apertar h receberemos uma lista de atalhos para utilizar na página de ajuda, sendo os mais úteis; z e w, onde se troca de página, e setas pra cima e pra baixo pra navegar, além do Q para sair da ajuda, e novamente o Q para sair do manual ou do apropos, o comando a seguir.

O apropos é de grande ajuda, pois nele é onde se busca um comando a partir de algo que ele faça, com a seguinte sintaxe:

apropos "list"
Ele vai buscar comandos que tenham em sua descrição list e mostrá-los ao usuário numa página como a do manual.


# Informando o diretório atual

Se você deseja listar o seu diretório atual, pode ser feito a partir do comando pwd.


# Navegando pelas pastas

O comando cd (ou change directory) vai ser utilizado quando se deseja mudar de diretório, como por exemplo, ir para a pasta Downloads do seu computador, seria usado o seguinte comando (assumindo que você esteja na pasta do seu user):

cd Downloads
Caso deseje voltar um diretório, use cd .. , dessa forma:

cd ..
Caso deseje voltar mais de um diretório, use uma / como separação, ex:

cd../../../
Nesse caso, voltaríamos 3 diretórios, dado que temos 3 repetições do comando.

Caso deseje voltar de onde veio, use cd ~, da seguinte forma:

cd ~
no caso de um diretório com espaços, devem-se usar as barras invertidas (ou \ ), visto que sem essas barras, o computador não consegue reconhecer o espaço no diretório e não consegue acessá-lo, deve ser utilizado da seguinte forma:

cd Diretório\ com\ espaços
ou, fazer uso de aspas, da seguinte forma:

cd "Diretório com espaços/"

* apertar TAB, ele preenche automaticamente


# Listando arquivos e pastas

Vamos falar sobre o comando que lista arquivos e pastas, o ls. Quando utilizado sem nenhum argumento, irá listar os arquivos e diretórios dentro de determinada pasta, quando utilizado com o argumento -l, irá mostrar as permissões dos arquivos, qual o dono e o grupo e o tamanho dos arquivos e diretórios em bytes (se usado com -h, será mostrado de forma mais fácil de compreender, com K, M, G, etc), se usado com o argumento a, mostra também os arquivos ocultos do sistema, se utilizado com o argumento R, fica formatado de forma recursiva, mostrando uma árvore dos seus diretórios, e por fim, o argumeto S ordena os seus arquivos por tamanho.


# Obtendo informações dos arquivos

Nesta aula, falaremos sobre os comandos file e stat, ambos utilizados para obeter maiores informações dos arquivos, utilizados da seguinte forma:

file NomeDoSeuArquivo.txt
O comando file é utilizado para obter informações gerais, como formato e informações do tipo de arquivo.

já o comado stat é utilizado, ele mostra a permissão que se tem no arquivo, o dono e o grupo, tamanho, data de última modificação outras informações úteis. É usado da seguinte forma:

stat NomeDoSeuArquivo.txt


# Criando diretórios com mkdir

Nesta aula será utilizado o comando mkdir (make directory, ou fazer diretório, do inglês).

Caso queira criar um diretório, use o com a seguinte sintaxe

mkdir Pasta1
Podemos também criar múltiplas pastas com uma só execução do comando, da seguinte forma:

mkdir Pasta1 Pasta2 Pasta3
Ou ainda adicionar pastas dentro dessas pastas da seguinte forma ao usar o argumento -p, que nos possibilita

mkdir -p Pasta1/DentroDaPasta1/MaisUmaPasta/Pastaception


# Criando arquivos com touch

Nesta aula falaremos sobre como criar um ou mais arquivos com o comando touch, que também serve para atualizar o registro de data e hora de arquivos ou pastas.

É executado da seguinte maneira:

touch NomeDoArquivoOuPastaParaAtualizar
E, para criar uma pasta ou arquivo com o touch, só precisamode colocar o comando e o nome de um arquivo ou pasta que não exista no mesmo diretório, e assim como o mkdir, pode ser usado para criar mais de um arquivo ao mesmo tempo, exemplo abaixo:

touch file1.txt file2.txt file3
Você pode perceber que o file 3 não possui uma extensão, porém, mesmo assim nao deixa de ser um arquivo, diferentemente do mkdir, onde um comando feito assim resultaria numa pasta chamada file3 sendo criada.


# Copiando arquivos e pastas

Falaremos nesta aula sobre o comando cp (que é copy, ou do inglês, cópia), que é um comando utilizado para copiar arquivos.

O primeiro argumento é o nome do arquivo que deseja copiar, já o segundo argumento é onde copiar o arquivo, da seguinte forma:

cp File1.txt Destino
Caso você deseje copiar pastas, ainda é possível, porém será necessário o uso do argumeto -r, da seguinte forma:

cp -r Pasta1 Pasta2
Podemos ainda copiar mais de uma pasta ou arquivo, fazendo uso de espaços, sendo o último argumento a localização final, da seguinte forma:

cp -r Pasta1 Pasta2 Pasta3 Pasta4 Pasta5 Pasta6 pastaDestino


# Movendo e renomeando arquivos ou pastas

Nesta aula veremos sobre o comando mv, que pode ser tanto usado para mover quanto renomear os arquivos. Para mover um arquivo de um diretório para outro, primeiro tenha certeza que está no diretório correto, após isso, utilize o comando da seguinte maneira:

mv File Destino
Pode-se mover também múltiplos arquivos simultâneamente, assim como no cp, utilizando-se de espaços e deixando o último argumento como destino, da seguinte forma:

mv Pasta1 Pasta2 Pasta3 Pasta4 Pasta5 Pasta6 pastaDestino
Para renomear ARQUIVOS, deve ser utilizado da seguite forma:

mv file.txt arquivo.txt


# Removendo arquivos ou pastas

Atenção!

Esse comando vai remover totalmente o arquivo ou pasta, sem enviar para a lixeira, tome cuidado!

O comando esse caso é o rm, e é utilizado da seguinte forma:

rm file1.txt file2.txt
Caso você queira remover um diretório, deve usar o argumenro -r, dessa forma:

rm -r NomeDoDiretorio
E, às vezes ele pode acabar pedindo sua permissão para deletar algo, e caso você não queira ter que confirmar suas ações, use o prefixo -f, dessa forma:

rm -rf file1.txt file2.txt
Tome muito cuidado com esse comando!


## Wildcards (curingas)

os Wildcard (ou curingas) são * e ?.

Começando pelo *, utilizado da seguinte forma:

mv fil* Diretorio
Nesse cenário, todos os arquivos com as primeiras letras fil, seriam movidas para a pasta Diretorio, ou seja, se eu tivesse 3 arquivos com nomes file1 file2 e file3, ou mesmo 500 arquivos com as 3 primeiras letras em seu nome sendo fil, seriam movidos para a pasta Diretorio.

Já o ? é utilizado de forma similar, observe o exemplo abaixo:

mv -r site? Diretorio
Suponhamos que nessa pasta, exista a pasta site, site1, site2, site3, site4, site5 e site67.

Nesse cenário, iríamos estar movendo apenas as pastas com um número ao seu final, fazendo o comando ignorar a pasta site e a pasta site67, pois apenas um dígito após a wildcard é passado.


# Encontrar arquivos ou pastas com find

Nesta aula falaremos sobre o comando find, utilizado para encontrar pastas e arquivos, e sua sintaxe é:

find <caminho> arg [expression]
No caso, se deseja usar o finder no seu diretório atual, você pode usar um ponto (.), sendo assim, você substituiria o <path> pelo diretório que deseja

Já o arg, é o tipo de item que deseja encontrar, seja esse uma pasta ou um arquivo.

Usaremos para buscar um arquivo, então teremos que usar o arg -type e colocar a letra f, caso quiséssemos uma pasta, seria a letra d após o -type.

Também temos o argumento -name, que é o nome do arquivo ou pasta que desejamos, e caso quiséssemos que as letras pesquisadas sejam independentes de capitalização (maiúsculo, minúsculo), deve-se usar o argumento -inamepodendo também ser usado para buscar uma extensão específica de arquivo. Exemplo abaixo.

find . -type f -name "*.mp4"
Assim que fosse executado, esse comando exibiria todos os arquivos .mp4 no seu diretório atual.


# Ver conteúdo de arquivos com cat e less

Para ver os coteúdos de um arquivo, pode-se usar o camando less, que tem a mesma ideia do manual, ou seja, pode-se apertar o h e ver como se usa o less em mais detalhes.
* se eu quiser sair, aperto "Q"

Já o cat, vai printar direto na tela o conteúdo do arquivo, possibilitando subir e descer no conteúdo com o scroll do mouse.

Caso tente abrir um arquivo binário, ou seja, um arquivo que não possua texto para ossos olhos humanos, como um png, mp4 ou jpeg com esses comandos, receberá uma mensagem de aviso e uma pergunta se ainda deseja vê-lo, caso a resposta seja não, pressione enter, caso seja sim, pressione y.


# Editando arquivos com nano e vim

Nesta aula, veremos como editar arquivos com o nano, que é um editor de texto, porém, você não pode usar seu mouse, para navegar usam-se as setinhas do teclado, e embaixo fica a legenda do que pode ser feito, através da tecla Ctrl e mais alguma letra, por exemplo a combinação Ctrl + O Salvaria esse arquivo, mas antes seria perguntado se deseja salvar o arquivo com o mesmo nome, caso responda que não, será mostrada uma tela para alterar o nome do arquivo.

Para fechar o nano, o atalho é o Ctrl + X

O vim é muito mais complexo que o nano, e pode-se inserir plugins nele, tornando-o mais poderoso. Para sair do vim, usa-se o comando :q

Porém, se tiver feito alguma alteração, ele vai precisar ou do comando :wq, para confirmar, escrever essas mudanças e sair, ou do comando :q!, que cancela as alterações

