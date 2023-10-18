## border

As bordas da caixa

- value `<border-style>` | `<border-width>` | `<border-color>`
    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - width: `<length>`
    - color: `<color>`


```css

div {
    /* shorthand */
	border-top: solid 2px; /* top | right | bottom | left */

	/* style */
	border: solid;

	/* width <length> | style */
	border: 2px dotted;

	/* style | color */
	border: outset #f33;

	/* width | style | color */
	border: medium dashed green;
}

```



```html

<div>
    block, margin
</div>

<section> Elemento abaixo </section>

```

```css

* {
    margin: 0px;   /* resetou pra ficar tudo 0, pois vem pré definido valores */
}

div, section {
    width: 100px;
    height: 100px;
    margin: 20% auto;
    border: 10px solid red;
    
    box-sizing: border-box;   /* deixa no tamanho estipulado em width e height */
    border-top: dotted green 4px;   /* adiciona uma borda verde somente encima, permanecendo a vermelha no restante, e dotted é um tipo de borda pontilhada, tem vários, ver acima */
    border-bottom: none;   /* fica sem borda somente embaixo */
}

```


### E outline

- difere em 4 sentidos:
    - Não modifica o tamanho da caixa, pois não é parte do Box Model
    - Poderá ser diferente de retangular
    - Não permite ajuste individuais
    - Mais usado pelo user agent para acessibilidade 


```css

* {
    margin: 0px;
}

div, section {
    width: 100px;
    height: 100px;
    margin: 20% auto;
    border: 10px solid red;
    box-sizing: border-box;
    border-top: dotted green 4px;
    border-bottom: none;

    outline: yellow 4px solid;   /* fica por fora */
}

```


https://developer.mozilla.org/en-US/docs/Web/CSS/border