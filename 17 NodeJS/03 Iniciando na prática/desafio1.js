/*
    Crie 2 arquivos Javascript.
    * O primeiro, irá exportar uma função chamada getFlag()
    * que receberá um argumento do tipo String
    * Essa função deverá buscar dentro do array process.argv a flag desejada, 
    * que é a String e retornar o valor da flag
    * 
    * O segundo irá importar a função e passar a flag desejada
    * 
    * Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting
    * para que seja impresso no terminal a saudação e o nome da pessoa
*/

function getFlags(flag) {
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
}
// indexOf, procura o número da flag, e vê a próxima (+1)
// pegando resultado process.argv[index]

module.exports = getFlags;
