## Para criar nomes

* JS é case-sensitive (sensível ao caso)
* JS aceita a cadeia de caracteres Unicode

- Posso:
    * Iniciar com esses caracteres especiais $ _
    * Iniciar com letras
    * Colocar acentos
    * Letras maiúsculas e minúsculas fazem diferença

- Não posso:
    * Iniciar com números
    * Colocar espaços vazios no nome

- Ideal:
    * Criar nomes que fazem sentido
    * Que explique o que a variável é ou faz
    * camelCase
    * snake_case
    * Escrever em inglês


Para nomearmos variáveis corretamente e de um jeito inteligente, precisamos saber de algumas coisas, como: JavaScript é case-sensitive (sensível à letras maiúsculas e minúsculas) e aceita a cadeia de caracteres Unicode, podendo receber acentuações. Em um nome de variável em JS você pode: Iniciar com caracteres especiais, iniciar com letras e colocar acentos, lembrando sempre que letras maiúsculas e minúsculas fazem a diferença. Em contraste, você não pode: Iniciar com números e colocar espaços vazios. Idealmente você deve colocar nomes significativos, que fazem sentido na aplicação, explicando o que a variável é, usando camel case, onde a primeira palavra de uma frase é toda minúscula, e as subsequentes não se separam por espaço e tem a primeira letra maiúscula, por exemplo: oNomeDessaVariável, e usar nomes em inglês.


```js

let Álisson = 'Alisson'
let Alisson = 'Alisson'
let álisson = 'Alisson'
let alisson = 'Alisson' // cada um deles é uma variavel diferente e estão recebendo um valor

let $alisson = 'Alisson'
let _alisson = 'Alisson'
let aqui_é_uma_variável = 'Alisson'

let nomes_coerentes = 'Alisson'
let name = 'Alisson'
let em_inglês = 'Alisson'

let camelCaso = 'quando tiver espaço, ele começa com letra em caixa alta'

```