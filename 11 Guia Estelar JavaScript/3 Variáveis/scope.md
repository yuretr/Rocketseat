# Scope

O Scope ou Escopo determina a visibilidade de uma variável em um código, e para entender scope precisamos primeiramente entender block statement, que é o código presente dentro de chaves. O escopo do var é global, ou seja, uma variável declarada com var poderá ser usada em todo o código.

* Escopo determina a visibilidade de alguma variável no JS


# Block statement

```js
// vamos iniciar um bloco
{
// aqui dentro é um bloco e posso colocar qualquer código

} // aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`


## var

```js
// var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco?', x)

// var é global e também local
{
    var x = 0
} // dentro é local, e fora dessas chaves é global

console.log('> existe x depois do bloco?', x)
```


## Scope let e const

```js
// const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco?', y)

{
    let y = 0
}
// a diferença é que só funciona dentro do bloco

console.log('> existe y depois do bloco?', y)
```


No JS mais moderno, evitamos utilizar var, utilizamos mais let e const