# Background-color

A propriedade background-color define a cor de fundo do elemento selecionado.


```html

<header>

</header>
<main>
    <h1>Evolua rápido com a tecnologia</h1>
    <p>Junte-se a milhares de devs e acelere
    na direção dos seus objetivos</p>
</main>

```

```css

* {
    margin: 0;
}

header {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
    background-image: url(https://www.rocketseat.com.br/assets/logos/rocketseat.svg);   /* padrão ficar se repetindo */

}

```

## Background-image-repeat

```css

header {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
    background-image: url(https://www.rocketseat.com.br/assets/logos/rocketseat.svg);   /* padrão ficar se repetindo */
    background-repeat: no-repeat;   /* pode colocar outras configurações conforme abaixo */

    /* Values */
    background-repeat: repeat-x;
    background-repeat: repeat-y;
    background-repeat: repeat;
    background-repeat: space;
    background-repeat: round;
    background-repeat: no-repeat;

    /* Podedmos usar 2 valores: horizontal | vertical */
    background-repeat: repeat space;
    background-repeat: repeat repeat;
    background-repeat: round space;
    background-repeat: no-repeat round;

}


```

## Background-position

```css

header {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
    background-image: url(https://www.rocketseat.com.br/assets/logos/rocketseat.svg);
    background-repeat: no-repeat;
    background-position: right bottom;   /* pode deixar somente right, ou pode complementar de onde começa a imagem, que nesse caso ficou bottom, embaixo */

    /* Pricipais valores */
    background-position: top;
    background-position: bottom;
    background-position: left;
    background-position: right;
    background-position: center;
}

```

## Background-size

```css

header {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
    background-image: url(https://www.rocketseat.com.br/assets/logos/rocketseat.svg);
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;   /* tamanho da imagem */

    /* Values */
    background-size: cover;   /* se ajusta dentro */
    background-size: contain;   /* se estica para todo o background */

    /* Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura */
    background-size: 40% auto;   /* largura e altura */
    background-size: 2em 25%;
    background-size: auto 8px;
    background-size: auto auto;

}

```

## Background-origin-clip

```css

header {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
    background-image: url(https://www.rocketseat.com.br/assets/logos/rocketseat.svg);
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    background-origin: border-box;

/* A propriedade background-origin é quem define o ponto de origem de uma imagem específica. */

/* Principais valores */
background-origin: border-box;   /* começa a partir da borda */
background-origin: padding-box;   /* dentro, a partir do padding */
background-origin: content-box;   /* dentro, depois da borda */

/* O background-clip define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo. */

/* Principais valores */
background-clip: border-box;   /* aqui ele faz tanto com a imagem, quanto com a cor */
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

}

```

## Background-attachment

```css

main {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
    background-image: url(https://www.rocketseat.com.br/assets/logos/rocketseat.svg);
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    background-origin: border-box;
    background-attachment: fixed;

    /* Principais valores */
    background-attachment: scroll;   /* padrão, ele percorre a imagem */
    background-attachment: fixed;   /* a imagem por exemplo fica fixa, mesmo descendo a página */
    background-attachment: local;

}

```

## Shorthand

```css

main {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
    background-image: url(https://www.rocketseat.com.br/assets/logos/rocketseat.svg);
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    background-origin: border-box;
    background-attachment: fixed;

    background: rgb(55, 100, 50) url(https://www.rocketseat.com.br/assets/logos/rocketseat.svg) no-repeat right top / 50px border-box content-box fixed;


/* content-box é do clip */

}

```

## Gradient

```css

main {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
    background-image: url(https://www.rocketseat.com.br/assets/logos/rocketseat.svg);
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    background-origin: border-box;
    background-attachment: fixed;

    background: rgb(55, 100, 50) url(https://www.rocketseat.com.br/assets/logos/rocketseat.svg) no-repeat right top / 50px border-box content-box fixed;

    background: linear-gradient(red, yellow);   /* podemos adicionar mais cores */
    background: linear-gradient(45deg, red, yellow);   /* 45deg é o ângulo */

    background: radial-gradient(green, red, yellow);   /* em forma circular */
    background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2));

}

```

# Múltiplos valores

```css

main {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
    background-image: url(https://www.rocketseat.com.br/assets/logos/rocketseat.svg);
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    background-origin: border-box;
    background-attachment: fixed;

    background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2)), rgb(55, 100, 50) url(https://www.rocketseat.com.br/assets/logos/rocketseat.svg) no-repeat right top / 50px border-box content-box fixed;

   /* aqui aplica dois background, um em degradê, e outro uma imagem fixa encima no canto direito, somente utilizar a vírgula para separa-los */

}

```

