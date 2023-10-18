# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização.


## Descendant combinator

* Identificado por um espaço entre os seletores.
* Busca um elemento dentro de outro.

```css

/* vai procurar uma tag body, dentro dela procurar article, e dentro dela h2, e estilizar conforme código */
body article h2 {
    color: red;
}

```

<!-- ------------------------------------- -->

<!-- Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização
Descendant combinator

    Identificado por um espaço entre os seletores
    Busca um elemento dentro de outro, mesmo que existam outros elementos no caminho

HTML

<body>
	<article>
		<h2>Um Título</h2>
	</article>
</body>

CSS

body article h2 {
	color: red;
} -->

<!-- ------------------------------------- -->


## Child combinator

* Identificado pelo sinal  ` > ` entre dois seletores
* Seleciona somente o elemento que é filho direto do pai
* Elementos depois do filho direto serão desconsiderados

```css
body > ul > li
```

Exemplo:

```html
<body>
	<ul>
		<li>Item 1</li>
		<ul>
			<li>Item 2</li>
		</ul>
	</ul>
</body>
```

```css
body > ul > li {
	color: blue;
}
```
Nesse caso, somente o Item 1 ficará Azul (blue), pois ele é filho direto, e o Item 2 não.
Obs.: Caso a sequência de aberturas de tag esteja diferente da determinada, não irá funcionar. Dentro de body, tem que estár abrindo alguma tag ul, e dentro desta, tem que estar abrindo alguma tag li, se não, não irá funcionar.


```css
ul > li {
	color: blue;
}
```
Nesse exemplo, todos os <li>, que estiverem dentro de um <ul>, receberão essas características.

<!-- ------------------------------------- -->

<!-- 
    Identificado pelo sinal > entre dois seletores
    seleciona somente o elemento que é filho direto do pai
    Elementos depois do filho direto serão desconsiderados

HTML

<body>
  <ul>
    <li>Item 1</li>
    <ul>
      <li>Item 2</li>
    </ul>
  </ul>
</body>

body > ul > li {
	color: blue;
} -->

<!-- ------------------------------------- -->


## Adjacent sibling combinator

* Identicado pelo sinal ` + ` entre dois seletores
* Seleciona somente o elemento do lado direito que é irmão direto na hierarquia

```css
h1 + p
```

Exemplo:

```html
<h1>Título</h1>

<p>
	Este é um parágrafo
</p> <!-- somente esse p receberá as características, pois é irmão direto na hierarquia -->

<p>
	Este é outro.
</p>
```

```css
h1 + p {
	color: red;
}
```

Exmplo2:

```html
<button>Um botão</button>
<button>Outro</button> <!-- receberá uma margem de um botão para o outro, se utiliza isso muito -->
```

```css
button + button {
	margin-left: 32px;
}
``` 

<!-- ------------------------------------- -->

<!-- Adjacent sibling combinator

    Identificado pelo sinal + entre dois seletores
    Seleciona somente o elemento do lado direito que é irmão direto na hierarquia

HTML

<h1>
  Título
</h1>
<p>
  Esse é um parágrafo
</p>
<p>
  Mais um parágrafo
</p>

CSS

h1 + p {
	color: red;
}
 -->

<!-- ------------------------------------- -->


## General sibling combinator

* Identificado pelo sinal ` ~ ` entre dois seletores
* Seleciona todos os elementos irmãos

```css
h1 ~ p
```

Exemplo:

```html
<h1>Título</h1>

<p>
	Este é um parágrafo
</p> <!-- todos os <p> ao lado do <h1> receberão as características -->

<p>
	Este é outro.
</p>
```

```css
h1 + p {
	color: red;
}
```

<!-- General sibling combinator

    Identificado pelo sinal ~ entre dois seletores
    Seleciona todos os elementos irmãos

HTML

<h1>
  Título
</h1>
<p>
  Esse é um parágrafo
</p>
<p>
  Mais um parágrafo
</p>

CSS

h1 ~ p {
	color: red;
} -->

<!-- ------------------------------------- -->


## Utilizando combinadores

```css
ul > li[class="red"]
```

Exemplo:

```html
<ul>
  <li>Alooo</li>
  <li class="red">Hey</li> <!-- somente esse ficará red -->
</ul>
```

```css
ul > li[class="red"] {
	color: red;
}
```


## Dica

* Seletores muito específicos tendem a causar dificuldades no recuso das regras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.

Exemplo:

```html
<ul>
  <li>Alooo</li>
  <li class="red">Hey</li> <!-- somente esse ficará red -->
</ul>
```

```css
.red {
	color: red;
}
``` /* Mais eficiente */


/* <!-- HTML

<ul>
  <li>Alooo</li>
  <li class="red">Hey</li>
</ul>

CSS

ul > li[class="red"] {
	color: red;
} --> */













