# Cores

Usamos CSS para alterar cores no nosso documento.


## Tipos

* background-color (para caixas)    (background é fundo)
* color (para textos)
* border-color (para-caixas)
* outros...


## Valores

Podemos definir os valores por

* palavras-chave (blue, transparent)
* hexadecimal (#990011)      (00 red, 00 green, 00 blue, composição dos números)
* funções: rgb, rgba, hsl, hsla


```css

element {
    /* Keyword values */
    color: currentcolor;    /* cores herdadas por propriedades ou propriedades de elemento filho */

    /* <named-color> values */
    color: red;
    color: orange;
    color: tan;
    color: rebeccapurple;

    /* <hex-color> values 0-F */
    color: #090;
    color: #009900;
    color: #090a;   /* quando tem um quarto valor, trabalha o alfa (transparência) */
    color: #009900aa;

    /* <rgb()> values */
    color: rgb(34, 12, 64, 0.6); /* 0-255 */
    color: rgba(34, 12, 64, 0.6);   /* quando tem um quarto valor, trabalha o alfa (transparência) */
    color: rgb(34 12 64 / 0.6);
    color: rgba(34 12 64 / 0.3);
    color: rgb(34.0 12 64 / 60%);
    color: rgba(34.0 12 64 / 30%);

    /* <hsl()> values */
    color: hsl(30, 100%, 50%, 0.6); /* Hue - Saturation - Lumiance */
    color: hsla(30, 100%, 50%, 0.6);   /* primeiro é o grau que fica localizada a cor, em seguida a saturação, luz e transparência */
    color: hsl(30 100% 50% / 0.6);
    color: hsla(30 100% 50% / 0.6);
    color: hsl(30.0 100% 50% / 60%);
    color: hsla(30.2 100% 50% / 60%);

    /* Global values */
    color: inherit;     /* Herda a cor do elemento anterior */
    color: initial;     /* Volta a sua cor inicial */
    color: unset;       /* Pega a cor do contexto */
}


```



```html

<div>
    <h1>Um texto aqui</h1>
</div>

```

```css

div {
    color: blue;
}
h1 {
    color: currentcolor;   /* herda a cor blue, mesmo se não deixar esse código, pois h1 é filho da div, a não ser que determine outra cor */
}


div {
    color: #0000ff88;   /* transparência */
}
h1 {
    color: currentcolor;
}


div {
    color: hsl(180, 100%, 50%, 20);
}
h1 {
    color: inherit;   /* herda a cor neste caso da div, herda a cor onde está */
    color: initial;   /* reseta a cor inicial, por exemplo nesse caso preto */
    color: unset;     /* utiliza a cor do contexto */
}


```

https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

https://convertacolor.com/