# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento.


## Tipos

* Element selector
    - Todos os elementos HTML

* ID Selector
    - Um elemento que tenha um atributo `id`.
    - Cada id deverá ser único.

* Class Selector
    - Os elementos que contenham um atributo `class`.
    - Podemos ter uma ou mais classes.

* Attribute selector
    - Um elemento que tenha um atributo específico.

* Pseudo-class selector
    - Elementos em um estado específico.


## Múltiplos

Você poderá selecionar múltiplos elementos a aplicar alguma regra css para todos eles.

Usamos uma separação por vírgulas para isso.

```css
h1, p, a {
    color: red;
}
```




```html

<h1>Título da página</h1>
<p id="content">Conteúdo da minha página</p>

<h1 class="red big">Título da página</h1>
<p class="red">Conteúdo da minha página</p>

<h1 title="Algum título">Título da página</h1>
<p title="conteúdo da página" class="red">Conteúdo da minha página</p>

```


```css

/* Element selector */
h1 {
    color: blue;
    font-size: 60px;
}


/* ID Selector */
#content {
    color: orange;
}


/* Class Selector */
.red {
    color: red;
}
.big {
    font-size: 3em;
}


/* Attribute selector */
[title] {
    color: orange;
}


/* Pseudo-class selector */
p:hover {
    color: red;
}
h1:hover {
    color: red;
} /* hover, com o mouse encima é diferente sem o mouse */


p:hover, h1:hover {
    color: red;
}

p, h1, .red {
    color: red;
}

```




<!-- Conecta um elemento HTML com o CSS a fim de alterar o elemento.
Tipos:

    Element Selector
        Todos os elementos HTML

    HTML

    <h1>Título da página</h1>
    <p>Conteúdo da minha página</p>

    CSS

    h1 {
    	color: blue;
    	font-size: 60px;
    }

    p {
    	color: green;
    }

    ID Selector
        Um elemento que tenha um atributo id
        Cada id deverá ser único
        Usa-se # para indicar um ID selector

    HTML

    <h1 id="title">Título da página</h1>
    <p id="content">Conteúdo da minha página</p>

    CSS

    #title {
      color: yellow;
    }

    #content {
    	color: orange;
    }

    Class Selector
        Os elementos com atributo class
        Podemos ter uma ou mais classes
        Usa-se . para indicar um class selector
        Todos os elementos com a mesma class são alterados

    HTML

    <h1 class="red big">Título da página</h1>
    <p class="red big">Conteúdo da minha página</p>

    CSS

    .red {
    color: red;
    }

    .big {
    	font-size: 3em;
    }

    Attribute Selector
        Um elemento que tenha um atributo específico

    HTML

    <h1 title="Algum titlulo">Título da página</h1>
    <p title="Conteúdo da página">Conteúdo da minha página</p>

    CSS

    [title] {
    	color: orange;
    }

    Pseudo-class Selector
        Elementos em um estado específico

    HTML

    <h1 class="red big">Título da página</h1>
    <p class="red big">Conteúdo da minha página</p>

    CSS

    p:hover {
    	color: red;
    }

    h1:hover {
    	color: red;
    }

Múltiplos

É possível selecionar múltiplos elementos e aplicar alguma regra CSS para todos eles.

Usamos uma separação por vírgulas para isso:

h1, p, .title, .title:hover {
	color: red;
} -->

