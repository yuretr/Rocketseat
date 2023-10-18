# NPM - Node Package Manager

__Glossary: Dependencies, Packages, Modules__

- [ ] Verificar se temos o npm instalado `npm -v`
- [ ] Criar nosso próprio pacote
- [ ] O que é o arquivo package.json
- [ ] Utilizar módulos de terceiros
- [ ] O que é o diretório node_modules
- [ ] O que é o arquivo package-lock.json
- [ ] Criar scripts para rodar com o npm



* criar pacote

npm init (no terminal)
ou
npm init -y (que já cria automático sem as perguntas)



* 
{
  "name": "qualquer-nome", (cuidado para não deixar igual a algum que já existe, se não dá conflito)
  "version": "1.0.0",
  "description": "",
  "main": "index.js", (arquivo principal que irá rodar)
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "learning",
    "nodejs"    (nunca terminar com vírgula no json)
  ],
  "author": "Yure Trevizan",
  "license": "MIT" (MIT, ISC, qual eu quiser)
}



* no terminal, npm install cfonts
(existe vários no repositório do npm)
gera um arquivo na pasta, será o módulo 'cfonts'

podemos utilizar o 'i'
por exemplo: npm i cfonts



* para deixar em dependências o módulo, podemos colocar no terminal:
npm i cfonts -D

significa que só irei usar o cfontes no ambiente de desenvolvimento, quando alguém for usar meu pacote/módulo não vai precisar instalar na maquina dele (devDependencies)


podemos instalar vários de uma só vez
npm cfonts inquirer opn


npm update
vai atualizar tudo no package-lock



* pasta node_modules não envio para o meu repositório no Git

.gitignore (colocamos para ignorar)

porque quando vamos utilizar modulos de terceiros, só colocar npm install e já puxa tudo novamente



* package-lock
- nesse arquivo não mexemos, pois ele faz um mapeamento de todas as dependências e módulos
- não deletar



* scripts

- adicionamos no package.json o caminho de um arquivo para rodar o script "node index.js"
- e criamos um arquivo de teste com uma mensagem (index.js)



* pacote global
- não será só no projeto, e sim em todos que faremos
npm i opn  -g

- esse -g que indica sendo global
- a pasta não fica no projeto, para saber onde "npm root -g"
- se eu quiser desinstalar "npm uninstall opn -g"



* mudar de versão os pacotes instalados
- npm i moment
- "moment": "^2.29.4"   ->   major.minor.patch
- patch: ta resolvendo algum bug
- minor: significa que tem algumas alterações
- major é a versão do projeto e poderá quebrar o código dependendo
- ^ significa que o npm sempre que atualizar, vai atualizar o 29 e o 4, o minor e patch
- ~ significa que atualizará só o patch
- sem nenhum dos dois, sempre ficará fixo sem mudar
- * significa que vai mudar todas as versões

- npm i moment@1.5.1 (instala versão anterior)
- npm outdated (mostra a versão que estou, a desejada, e a última disponível)
- npm upgrade atualiza todos (porêm fica a desejada)
- npm i moment (tentando atualizar para a mais recente, acaba não atualizando nesse caso)
- npm i moment@latest (atualiza para última versão)



* removendo pacotes
- npm uninstall moment
