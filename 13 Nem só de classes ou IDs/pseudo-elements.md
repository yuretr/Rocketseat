# Pseudo-elements

Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

`::pseudo-element-name`


## Exemplos

::before
::after
::first-line


`::before` adiciona um pseudo-elemento antes do elemento selecionado.

```html

<ul>
    <li>Gratidão</li>
    <li>Esperança</li>
    <li>Fé</li>
    <li>Liberdade</li>
</ul>

```

```css

li::before {
    content: "> "
} /* antes de cada elemento vem a seta ">" , (content sempre obrigatório para before) */

```

`::after` adiciona um pseudo-elemento depois do elemento selecionado.

```css

li::after{
    content: ";"
} /* depois de cada elemento vem a seta ";" , (content sempre obrigatório para after) */

```

<!-- Tanto para o ::before quanto para o ::after é preciso adicionar o content, mesmo que ele seja vazio content = ""; -->


`::first-line` pega a primeira linha de um texto.

```css

p::first-line {
    font-weight: bold;
} /* tudo que ficar na primeira linha dentro da tela, ficará negrito (bold) */

p:nth-of-type(2)::first-line {
    font-weight: bold;
} /* o segundo elemento, a primeira linha dentro da tela, ficará negrito (bold) , (combinação) */

```


## Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

