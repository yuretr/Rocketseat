# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse sobre ele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo class :pseudo-class-name


## Selecionando elementos com pseudo-classes

* :first-child
* :nth-of-type()
* :nth-child()


## Ações do usuário

* :hover
* :focus


## Atributos

* :disabled
* :required


## Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
(Os que tiverem um simbolo na frente, tomar cuidado que está em testes.)



<!-- ------------------------------------ -->


<!-- :first-child -->

<!-- É quando queremos selecionar o primeiro filho de um grupo de elementos. -->

```html

<!-- Exemplo 1: -->
<ul>
  <li>Gratidão</li> <!-- Somente esse ficará negrito, por causa do first-child -->
  <li>Esperança</li>
  <li>Fé</li>
</ul>

<!-- Exemplo 2: -->
<ul>
  <h3>Palavras bonitas</h3> <!-- esse ficará negrito, por causa do first-child -->
  <li>Gratidão</li> 
  <li>Esperança</li>
  <li>Fé</li>
</ul>

```

```css

/* Exemplo 1: */
ul li:first-child {
  font-weight: bold;
} /* Nesse caso somente o primeiro filho ficará negrito */

/* Exemplo 2: */
ul li:first-child {
  font-weight: bold;
  color: red;
} /* Acaba dando problemas, o first-child pega o primeiro */

```

<!-- ------------------------------------ -->


<!-- :nth-of-type() -->

<!-- Pega o elemento por tipo e posição -->

```html

<ul>
  <h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>

```

```css

ul li:nth-of-type(2) {
  font-weight: bold;
} /* Ele aplica as características determinadas no número (2). */

```

<!-- ------------------------------------ -->


<!-- nth-child -->

<!-- É quando queremos selecionar o primeiro filho de um grupo de elementos. -->

```html

<ul>
  <h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>

```

```css

ul li:nth-child(2) {
  font-weight: bold;
} /* Ele ignora que o primeiro seria <li>, e considera a ordem dos filhos da tag <ul>. */

``` 

<!-- ------------------------------------ -->


<!-- :nth-child(odd) e :nth-child(even) -->
<!-- even - números pares
     odd - números ímpares -->

```html

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>

```

```css

ul li:nth-child(even) {
  color: blue;
} /* Nesse os números de itens filhos pares ficarão blue */

ul li:nth-child(odd) {
  color: gray;
} /* Nesse os números de itens filhos impar ficarão cinza */

```

<!-- ------------------------------------ -->

<!-- Algumas estilos só são aplicados quando o usuário faz alguma ação na página. -->

<!-- :hover -->

```css
a:hover {
  color: red;
} /* Vai mudar a cor do link para vermelho quando o usuário passar o mouse sobre o link */
```


<!-- :focus -->

<!-- É aplicado quando o elemento recebe o foco da ação do usuário que pode ser feita utilizando o teclado ou clicando no elemento com o mouse. É comumente usado em campos de input como uma forma de mostrar qual o input "ativo". -->

```css
input:focus {
  border-color: red;
} /* Quando eu clicar no campo input, a borda fica vermelha */
```

<!-- ------------------------------------ -->


<!-- Também podemos usar atributos para selecionar elementos no CSS Atributos -->

<!-- :disabled -->

```html

<input type="text" disabled>

```

```css

input:disabled {
    background-color: green;
} /* quando tiver disabled, ficará green */

```


<!-- :required -->

```html

<input type="text" required>

```

```css

input:required {
    background-color: red;
} /* quando tiver required, ficará red */

```

